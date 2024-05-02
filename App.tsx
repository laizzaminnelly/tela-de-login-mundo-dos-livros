import {useState} from'react'
import { ScrollView, View, Text, Image, TouchableOpacity, TextInput } from 'react-native'
import{ styles} from './styles'

export default function App() {
  const [emailField, setEmailField] = useState<string>('')
  const [passwordField, setPasswordField] = useState<string>('')
  const [forgotButton, setForgotButton] = useState<string>('')

  //Função de esqueci minha senha
  const handleForgoButton = () => {
    setForgotButton ('esqueci')
    alert(passwordField)
  }
  
  //Função do Botão Entrar
  const handleLoginButton = () => {
    alert(emailField)
  
  }

  // Função do cadastre-se
  const handleSignUpButton = () => {
  }

  return (
    <ScrollView style={styles.scrollview}>
     {forgotButton != 'esqueci' &&
      <>
    
      <View style={styles.container}>
     
        <Image style={styles.logo} source={require('./assets/logo2.png')}/>
        <Text style={styles.h1}>Mundo dos Livros</Text>
        <Text style={styles.h2}>Bem vindo(a)! Digite seus dados abaixo.</Text>
        
        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Email</Text>
          <TextInput 
          style={styles.inputField}
          placeholder='Digite seu email'
          placeholderTextColor='#000000'
          value={emailField}
          onChangeText={t => setEmailField(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
        </View>

        <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>Senha</Text>
          <TextInput
           style={styles.inputField}
           placeholder='**********' 
           placeholderTextColor='#000000'
           value={passwordField}
           onChangeText={t => setPasswordField(t)}
           autoCapitalize='none'
           secureTextEntry
           />
        </View>

        <View style={styles.aditionals}>
          <TouchableOpacity style={styles.forgotBtnArea} onPress={handleForgoButton}>
            <Text style={styles.forgoBtnText}>Esqueci minha senha</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity style={styles.button} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.signUpArea}>
          <Text style={styles.signUpText}>Não tem conta?</Text>
          <TouchableOpacity onPress={handleSignUpButton}>
            <Text style={styles.signUpBtnText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
       <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Laizza Minelly</Text>
        </View>
      </View>
      </>
     }
     {forgotButton == 'esqueci' &&
        <>
    <View style={styles.container}>
        <Image style={styles.logo} source={require('./assets/logo2.png')}/>
        <Text style={styles.h1}>Recupere sua Senha</Text>
        <Text style={styles.h2}>Bem vindo(a)! Crie uma nova senha.</Text>
         <View style={styles.inputArea}>
          <Text style={styles.inputLabel}>E-mail</Text>
          <TextInput 
          style={styles.inputField}
          placeholder='Digite seu email'
          placeholderTextColor='#000'
          value={emailField}
          onChangeText={t => setEmailField(t)}
          autoCapitalize='none'
          keyboardType='email-address'
          />
        </View>

        <TouchableOpacity style={styles.forgotButton} onPress={handleLoginButton}>
          <Text style={styles.buttonText}>Enviar</Text>
        </TouchableOpacity>

        <View style={styles.footerArea}>
          <Text style={styles.footerText}>Criado por Laizza Minelly </Text>
        </View>
      </View>
      </>
     }
   </ScrollView>
  )
}