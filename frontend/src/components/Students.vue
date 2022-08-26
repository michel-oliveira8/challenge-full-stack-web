<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div>
  <MessageComponent :msg="msg" v-show="msg" />
  <v-data-table
    :headers="headers"
    :items="students"
    sort-by="name"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>Register Students</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Student
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.name"
                      label="Name"
                      :rules="nameRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.email"
                      label="Email"
                      :rules="emailRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    v-if="formTitle === 'New Student'"
                  >
                    <v-text-field
                      v-model="editedItem.cpf"
                      label="CPF"
                      :rules="cpfRules"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                    v-if="formTitle === 'New Student'"
                  >
                    <v-text-field
                      v-model="editedItem.RA"
                      label="RA"
                      :rules="raRules"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancel
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="save"
              >
                Save
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">
              Are you sure you want to delete?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:[`item.actions`]="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="deleteItem(item)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
  </div>
</template>

<script>
import Student from '../services/api';
import MessageComponent from './Message.vue';

export default {
  data: () => ({
    valid: false,
    dialog: false,
    dialogDelete: false,
    nameRules: [
      (name) => !!name || 'Name is required',
    ],
    emailRules: [
      (email) => !!email || 'E-mail is required',
      (email) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email) || 'E-mail must be valid',
    ],
    cpfRules: [
      (cpf) => !!cpf || 'CPF is required',
      (cpf) => cpf.length === 11 || 'CPF length must be 11 characteres long',
    ],
    raRules: [
      (ra) => !!ra || 'RA is required',
      (ra) => ra.length === 6 || 'RA length must be 6 characteres long',
    ],
    headers: [
      { text: 'Name', align: 'start', value: 'name' },
      { text: 'Email', sortable: false, value: 'email' },
      { text: 'CPF', sortable: false, value: 'cpf' },
      { text: 'RA', sortable: false, value: 'RA' },
      { text: 'Actions', value: 'actions', sortable: false },
    ],
    students: [],
    editedIndex: -1,
    editedItem: {
      name: '',
      email: '',
      cpf: '',
      RA: '',
    },
    defaultItem: {
      name: '',
      email: '',
      cpf: '',
      RA: '',
    },
    msg: null,
  }),

  components: {
    MessageComponent,
  },

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Student' : 'Edit Student';
    },
  },

  watch: {
    dialog(val) {
      return val || this.close();
    },
    dialogDelete(val) {
      return val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    async initialize() {
      this.students = await Student.getStudents();
    },

    editItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = { ...item };
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.students.indexOf(item);
      this.editedItem = { ...item };
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      this.students.splice(this.editedIndex, 1);
      Student.deleteStudents(this.editedItem.RA);
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = { ...this.defaultItem };
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.students[this.editedIndex], this.editedItem);
        Student.editStudents(this.editedItem.RA, this.editedItem);
      } else if (!this.students.some((student) => student.RA === this.editedItem.RA)) {
        this.students.push(this.editedItem);
        Student.createStudents(this.editedItem);
        this.msg = 'Student successfully registered!';
        setTimeout(() => {
          this.msg = '';
        }, 2000);
      } else {
        this.msg = 'RA already registered!';
        setTimeout(() => {
          this.msg = '';
        }, 2000);
      }
      this.close();
    },
  },
};
</script>
