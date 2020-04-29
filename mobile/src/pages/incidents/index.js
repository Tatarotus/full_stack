import React, { useState, useEffect } from "react";
import { ScrollView, View, Image, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/Logo.png";
import styles from "./styles";

export default function Incidents() {
  const navigation = useNavigation();
  const [incidents, setIncidents] = useState([]);

  function navigateToDetail() {
    navigation.navigate("Detail");
  }

  async function loadIncidents() {
    const response = await api.get("Incidents");

    setIncidents(response.data);
  }
  useEffect(() => {
    loadIncidents();
  }, []);
  return (
    <ScrollView
      data={incidents}
      keyExtractor={incident => String(incident.id)}
      showVerticalScrollIndicator={false}
    >
      <View style={styles.container}>
        <View style={styles.header}>
          <Image style={styles.logo} source={logoImg} />
          <Text style={styles.headerText}>
            Total de <Text style={styles.headerTextBold}> 0 casos</Text>.
          </Text>
        </View>

        <Text style={styles.title}>Bem-vindo!</Text>
        <Text style={styles.description}>
          Escolha um dos casos abaixo e salve o dia.
        </Text>

        <View style={styles.incidentList}>
          <View style={styles.incident}>
            <Text style={styles.ongName}>APAD</Text>
            <Text style={styles.caseTitle}>
              Cachorrinha atropelada na rua augusta.
            </Text>
            <TouchableOpacity
              style={styles.detailBtn}
              onPress={navigateToDetail}
            >
              <Feather name="briefcase" size={16} color="#fff" />
              <Text style={styles.detailBtnTxt}>Mais detalhes</Text>
            </TouchableOpacity>
            <Text style={styles.caseValue}>R$120,00</Text>
          </View>
        </View>

        <View style={styles.incidentList}>
          <View style={styles.incident}>
            <Text style={styles.ongName}>APAD</Text>
            <Text style={styles.caseTitle}>
              Cachorrinha atropelada na rua augusta.
            </Text>
            <TouchableOpacity
              style={styles.detailBtn}
              onPress={navigateToDetail}
            >
              <Feather name="briefcase" size={16} color="#fff" />
              <Text style={styles.detailBtnTxt}>Mais detalhes</Text>
            </TouchableOpacity>
            <Text style={styles.caseValue}>R$120,00</Text>
          </View>
        </View>
        <View style={styles.incidentList}>
          <View style={styles.incident}>
            <Text style={styles.ongName}>APAD</Text>
            <Text style={styles.caseTitle}>
              Cachorrinha atropelada na rua augusta.
            </Text>
            <TouchableOpacity
              style={styles.detailBtn}
              onPress={navigateToDetail}
            >
              <Feather name="briefcase" size={16} color="#fff" />
              <Text style={styles.detailBtnTxt}>Mais detalhes</Text>
            </TouchableOpacity>
            <Text style={styles.caseValue}>R$120,00</Text>
          </View>
        </View>
        <View style={styles.incidentList}>
          <View style={styles.incident}>
            <Text style={styles.ongName}>APAD</Text>
            <Text style={styles.caseTitle}>
              Cachorrinha atropelada na rua augusta.
            </Text>
            <TouchableOpacity
              style={styles.detailBtn}
              onPress={navigateToDetail}
            >
              <Feather name="briefcase" size={16} color="#fff" />
              <Text style={styles.detailBtnTxt}>Mais detalhes</Text>
            </TouchableOpacity>
            <Text style={styles.caseValue}>R$120,00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
