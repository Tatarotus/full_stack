import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  TouchableOpacity
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import logoImg from "../../assets/Logo.png";
import styles from "./styles";
import * as MailComposer from "expo-mail-composer";

export default function Incidents() {
  const navigation = useNavigation();
  const message = `Ola Ong estou entrando em contato, pois gostaria de ajudar no caso "Cadelinha Atropelada" com o valor de R$120`;

  function navigateToIncidents() {
    navigation.navigate("Incidents");
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: "Herói do caso: Cadelinha atropelada",
      recipients: ["sam@samuelresolve.com"],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+5521975452225&text=${message}`);
  }
  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.logoContainer}
            onPress={navigateToIncidents}
          >
            <Image style={styles.logo} source={logoImg} />
          </TouchableOpacity>
          <Text style={styles.headerText}>APAD</Text>
        </View>

        <View style={styles.caseDetail}>
          <Text style={styles.caseTitle}>Caso:</Text>
          <Text style={styles.caseName}>
            Cadelinha atropelada na rua augusta
          </Text>

          <Text style={styles.descriptionTitle}>Descrição:</Text>
          <Text style={styles.descriptionName}>
            Aliquam accumsan tristique consectetur. In hac habitasse platea
            dictumst. Vestibulum eget fermentum odio. In viverra pharetra lorem
            nec rhoncus. Quisque nec eros eget magna condimentum aliquam vel et
            dolor. Vivamus volutpat sollicitudin pharetra. Etiam viverra mi ut
            pharetra aliquet. Mauris lobortis ante vitae dui tempor, a feugiat
            urna blandit. Morbi lacinia, tortor ut elementum sagittis, orci
            sapien ultricies nisi, eu laoreet justo nibh id nisl. Mauris dui
            nulla, tincidunt at rhoncus quis, eleifend a odio. Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
          </Text>

          <Text style={styles.valueTitle}>Valor:</Text>
          <Text style={styles.value}>R$ 120</Text>
        </View>

        <Text style={styles.saveDay}>Salve o Dia!</Text>
        <Text style={styles.beTheHero}>
          Seja um Herói e ajude a mudar a situação de alguém!
        </Text>

        <View style={styles.ctaBtn}>
          <TouchableOpacity style={styles.whatsapp} onPress={sendWhatsapp}>
            <MaterialCommunityIcons name="whatsapp" size={26} color="#fff" />
            <Text style={styles.whatsappTxt}>WhatsApp</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.email} onPress={sendMail}>
            <MaterialIcons name="email" size={26} color="#fff" />
            <Text style={styles.emailTxt}>Email</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
