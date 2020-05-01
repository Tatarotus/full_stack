import React from "react";
import {
  ScrollView,
  View,
  Image,
  Text,
  Linking,
  TouchableOpacity
} from "react-native";

import { useNavigation, useRoute } from "@react-navigation/native";
import { MaterialCommunityIcons, MaterialIcons } from "@expo/vector-icons";
import logoImg from "../../assets/Logo.png";
import styles from "./styles";
import * as MailComposer from "expo-mail-composer";

export default function Incidents() {
  const navigation = useNavigation();
  const route = useRoute();
  const incident = route.params.incident;
  const email = incident.email;
  const whatsapp = incident.whatsapp;
  const message = `Olá ${incident.name}, estou entrando em contato, pois gostaria de ajudar no caso: "${incident.title}" no valor de ${incident.value} reais`;

  function navigateToIncidents() {
    navigation.navigate("Incidents");
  }

  function sendMail() {
    MailComposer.composeAsync({
      subject: `Herói do caso: ${incident.title}`,
      recipients: [email],
      body: message
    });
  }

  function sendWhatsapp() {
    Linking.openURL(`whatsapp://send?phone=+55${whatsapp}&text=${message}`);
  }
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          style={styles.logoContainer}
          onPress={navigateToIncidents}
        >
          <Image style={styles.logo} source={logoImg} />
        </TouchableOpacity>
        <Text style={styles.headerText}>{incident.name}</Text>
      </View>

      <ScrollView>
        <View style={styles.caseDetail}>
          <Text style={styles.caseTitle}>Caso:</Text>
          <Text style={styles.caseName}>{incident.title}</Text>

          <Text style={styles.descriptionTitle}>Descrição:</Text>
          <Text style={styles.descriptionName}>{incident.description}</Text>

          <Text style={styles.descriptionTitle}>Cidade:</Text>
          <Text style={styles.descriptionName}>{incident.city}</Text>

          <Text style={styles.descriptionTitle}>UF:</Text>
          <Text style={styles.descriptionName}>{incident.uf}</Text>

          <Text style={styles.valueTitle}>Valor:</Text>
          <Text style={styles.value}>
            {Intl.NumberFormat("pt-Br", {
              style: "currency",
              currency: "BRL"
            }).format(incident.value)}
          </Text>
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
      </ScrollView>
    </View>
  );
}
