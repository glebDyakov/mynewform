<template>
  <div ref="hello" id="hello" class="hello">
    <div ref="abcd">
    <h1>Форма</h1>
    <div class="myform">
    <p>
    <label for="family">фамилия</label>
    </p>
    <input  v-model="family" type="text" name="family" id="family" value="" @change="familyfunction" >
    <p v-if="$v.family.$invalid && $v.family.$dirty">Неправильно указано</p>
    

    <p>
    <label for="name">имя</label>
    </p>
    <input v-model="name" type="text" name="name" id="name" value="" @change="namefunction" >
    <p v-if="$v.name.$invalid && $v.name.$dirty">Неправильно указано</p>


    <p>
    <label for="patronymic">отчество</label>
    </p>
    <input v-model="patronymic" type="text" name="patronymic" id="patronymic" value="" @change="patronymicfunction" >
    <p v-if="$v.patronymic.$invalid && $v.patronymic.$dirty">Неправильно указано</p>
    
    <p>
    <label for="DateOfBirth">дата рождения</label>
    </p>
    <input v-model="DateOfBirth" type="text" name="DateOfBirth" id="DateOfBirth" value="" @change="DateOfBirthfunction" >
    <p v-if="$v.DateOfBirth.$invalid && $v.DateOfBirth.$dirty">Неправильно указано</p>

    <p>
    <label for="PhoneNumber">номер телефона</label>
    </p>
    <input v-model="PhoneNumber" type="text" name="family" id="family" value="" @change="PhoneNumberfunction" >
    <p v-if="!/^7[0-9]*$/.test(this.PhoneNumber) && $v.PhoneNumber.$dirty">Неправильно указано должно начинаться с 7</p>
    <p v-else-if="$v.PhoneNumber.$invalid && $v.PhoneNumber.$dirty">Неправильно указано должно быть минимум 11 символов</p>
    <p>
    <label for="gender">пол</label>
    </p>
    <input type="text" v-model="gender" name="gender" id="gender" value="" @change="genderfunction" >
    <p v-if="$v.gender.$invalid && $v.gender.$dirty">Неправильно указано</p>

    <p>
    <label for="ClientGroup">группа клиентов</label>
    </p>
    <select v-model="ClientGroup"  multiple>
      <option>VIP</option>
      <option>Проблемные</option>
      <option>ОМС</option>
    </select>
    <p v-if="$v.ClientGroup.$invalid && $v.ClientGroup.$dirty">Неправильно указано</p>


    <p>
    <label for="AttendingDoctor">лечащий врач</label>
    </p>
    <select v-model="AttendingDoctor" @change="AttendingDoctorfunction">
      <option value="">Иванов</option>
      <option value="">Захаров</option>
      <option value="">Чернышева</option>
    </select>
    <p v-if="$v.AttendingDoctor.$invalid && $v.AttendingDoctor.$dirty">Неправильно указано</p>


    <p>
    <label for="DontSendSMS">не отправлять смс</label>
    </p>
    <input v-model="DontSendSMS" type="checkbox" name="DontSendSMS" id="DontSendSMS" value="" @change="DontSendSMSfunction" >
    <p v-if="$v.DontSendSMS.$invalid && $v.DontSendSMS.$dirty">Неправильно указано</p>
  </div>

  <h1>Адресс</h1>
    <div class="myform">
      <p>
      <label for="index">Индекс</label>
      </p>
      <input v-model="index" type="text" name="index" id="index" value="" @change="indexfunction" >
      <p v-if="$v.index.$invalid && $v.index.$dirty">Неправильно указано</p>

            <p>
      <label for="Country">Страна</label>
      </p>
      <input v-model="Country" type="text" name="Country" id="Country" value="" @change="Countryfunction" >
      <p v-if="$v.Country.$invalid && $v.Country.$dirty">Неправильно указано</p>

      <p>
      <label for="Region">Область</label>
      </p>
      <input v-model="Region" type="text" name="Region" id="Region" value="" @change="Regionfunction" >
      <p v-if="$v.Region.$invalid && $v.Region.$dirty">Неправильно указано</p>

            <p>
      <label for="City">Город</label>
      </p>
      <input v-model="City" type="text" name="City" id="City" value="" @change="Cityfunction" >
      <p v-if="$v.City.$invalid && $v.City.$dirty">Неправильно указано</p>

                  <p>
      <label for="street">улица</label>
      </p>
      <input v-model="street" type="text" name="street" id="street" value="" @change="streetfunction" >
      <p v-if="$v.street.$invalid && $v.street.$dirty">Неправильно указано</p>

                  <p>
      <label for="house">дом</label>
      </p>
      <input v-model="house" type="text" name="house" id="house" value="" @change="housefunction" >
      <p v-if="$v.house.$invalid && $v.house.$dirty">Неправильно указано</p>
    </div>

      <h1>Паспорт</h1>
    <div class="myform">
      <p>
      <label for="DocumentType">Тип документа</label>
      </p>
      <select v-model="DocumentType"  multiple>
      <option>Паспорт</option>
      <option>Свидетельство о рождении</option>
      <option>Вод. удостоверение</option>
    </select>
      <p v-if="$v.DocumentType.$invalid && $v.DocumentType.$dirty">Неправильно указано</p>

            <p>
      <label for="Series">Серия </label>
      </p>
      <input v-model="Series" type="text" name="Series" id="Series" value="" @change="Seriesfunction" >
      <p v-if="$v.Series.$invalid && $v.Series.$dirty">Неправильно указано</p>

      <p>
      <label for="room">Номер </label>
      </p>
      <input v-model="room" type="text" name="room" id="room" value="" @change="roomfunction" >
      <p v-if="$v.room.$invalid && $v.room.$dirty">Неправильно указано</p>

            <p>
      <label for="IssuedBy">Кем выдан </label>
      </p>
      <input v-model="IssuedBy" type="text" name="IssuedBy" id="IssuedBy" value="" @change="IssuedByfunction" >
      <p v-if="$v.IssuedBy.$invalid && $v.IssuedBy.$dirty">Неправильно указано</p>

                  <p>
      <label for="dateOfIssue">Дата выдачи</label>
      </p>
      <input v-model="dateOfIssue" type="text" name="dateOfIssue" id="dateOfIssue" value="" @change="dateOfIssuefunction" >
      <p v-if="$v.dateOfIssue.$invalid && $v.dateOfIssue.$dirty">Неправильно указано</p>

    </div>
    <button @click="clickfunction">Создать клиента</button>
    </div>
    <p v-if="ClientCreated">Клиент успешно создан</p>
  </div>
  
</template>

<script>
import { required, minLength } from 'vuelidate/lib/validators'
export default {
  name: 'HelloWorld',
  data(){
    return {
      room:'',
      IssuedBy:'',
      DocumentType:[],
      Series:'',
      dateOfIssue:'',
      house:'',
      street:'',
      City:'',
      Region:'',
      Country:'',
      index:'',
      DontSendSMS:false,
      AttendingDoctor:'',
      PhoneNumber:"",
      DoNotSendSMS:"",
      name:"",
      Address:"",
      gender:"",
      family:"",
      Pasport:"",
      patronymic:"",
      DateOfBirth:"",
      ClientGroup:[],
      ClientCreated:false
      

    }
  },
  props: {
    msg: String
  },
  validations:{
      Series:{

      },
      room:{

      },
      dateOfIssue:{
        required
      },
      DocumentType:{
        required
      },
      IssuedBy:{

      },
      house:{

      },
      street:{

      },
      City:{
        required
      },
      Region:{

      },
      index:{

      },
      Country:{

      },
      DontSendSMS:{
        
      },
      AttendingDoctor:{

      },
      ClientGroup:{
        required
      },
      DateOfBirth:{
        required
      },
      name:{
        required
      },
      family:{
        required
      },
      patronymic:{
        
      },
      gender:{
        
      },
      
      
      PhoneNumber: {
        required,
        minLength: minLength(11)
      }
      
  },
  created(){
    
  },
  mounted(){
    Vue.config.devtools=true
  },
  methods:{
    clickfunction(){
      if(!this.$v.$invalid){
        this.$refs.abcd.style.display="none"
        this.ClientCreated=!this.ClientCreated
      }
    },
    roomfunction(){
        this.$v.room.$touch()
    },
      IssuedByfunction(){
        this.$v.IssuedBy.$touch()
    },
      DocumentTypefunction(){
        this.$v.DocumentType.$touch()
    },
      Seriesfunction(){
        this.$v.Series.$touch()
    },
      dateOfIssuefunction(){
        this.$v.dateOfIssue.$touch()
    },
      housefunction(){
        this.$v.house.$touch()
    },
      streetfunction(){
        this.$v.street.$touch()
    },
      Cityfunction(){
        this.$v.City.$touch()
    },
      Regionfunction(){
        this.$v.Region.$touch()
    },
      Countryfunction(){
        this.$v.Country.$touch()
    },
      indexfunction(){
        this.$v.index.$touch()
    },
      DontSendSMSfunction(){
        this.$v.DontSendSMS.$touch()
    },
      AttendingDoctorfunction(){
        this.$v.AttendingDoctor.$touch()
    },
      PhoneNumberfunction(){
        console.log(/^7[0-9]*$/.test(this.PhoneNumber))
      this.$v.PhoneNumber.$touch()
      //if(this.$v.family.$invalid){
        console.log(this.$v.PhoneNumber.$params.minLength.min)
      //}
      

    },
      
      namefunction(){
        this.$v.name.$touch()
    },
      Addressfunction(){
        this.$v.Address.$touch()
    },
      genderfunction(){
        this.$v.gender.$touch()
    },
      familyfunction(){
        this.$v.family.$touch()
    },
      Pasportfunction(){
        this.$v.Pasport.$touch()
    },
      patronymicfunction(){
        this.$v.patronymic.$touch()
    },
      DateOfBirthfunction(){
        this.$v.DateOfBirth.$touch()
    },
      ClientGroupfunction(){
        this.$v.ClientGroup.$touch()
    }
      
    
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.wrong{
  color:red;
}
.normal{
  color:black;
}
h3{
  margin: 40px 0 0;
}
ul{
  list-style-type: none;
  padding: 0;
}
li{
  display: inline-block;
  margin: 0 10px;
}
a{
  color: #42b983;
}
.myform{
    background-color:red;
    margin:auto;
}

@media(max-width: 768px){
  .myform{
      margin:auto;
      background:black;
      width:100px;
    }
}
@media(max-width: 991px){
  .myform{
      width:180px;
    }
}
@media(max-width: 1199px){
    .myform{
      width:250px;
    }
}
@media(min-width: 1200px){
  .myform{
    width:300px;
    
  }  
}

</style>
