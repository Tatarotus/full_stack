import React, { useState, useEffect } from "react";
import { FlatList, View, Image, Text, TouchableOpacity } from "react-native";

import { useNavigation } from "@react-navigation/native";
import { Feather } from "@expo/vector-icons";
import logoImg from "../../assets/Logo.png";
import styles from "./styles";

import api from "../../services/api.js";

export default function Incidents() {
  const navigation = useNavigation();
  const [total, setTotal] = useState(0);
  const [incidents, setIncidents] = useState([]);

  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  function navigateToDetail(incident) {
    navigation.navigate("Detail", { incident });
  }

  async function loadIncidents() {
    if (loading) {
      return;
    }
    if (total > 0 && incidents.length === total) {
      return;
    }
    setLoading(true);

    const response = await api.get("incidents", { params: { page } });

    setIncidents([...incidents, ...response.data.incidents]);
    setTotal(response.headers["x-total-count"]);
    setPage(page + 1);
    setLoading(false);
  }
  useEffect(() => {
    loadIncidents();
  }, []);
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.logoContainer} onPress={() => {}}>
          <Image style={styles.logo} source={logoImg} />
        </TouchableOpacity>
        <Text style={styles.headerText}>
          Total de <Text style={styles.headerTextBold}>{total} casos</Text>.
        </Text>
      </View>
      <FlatList
        style={styles.incidentList}
        data={incidents}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={loadIncidents}
        onEndReachedThreshold={0.2}
        renderItem={({ item }) => (
          <View>
            <View style={styles.incident}>
              <Text style={styles.ongName}>{item.title}</Text>
              <Text style={styles.caseTitle}>{item.description}</Text>
              <TouchableOpacity
                style={styles.detailBtn}
                onPress={() => {
                  navigateToDetail(item);
                }}
              >
                <Feather name="briefcase" size={16} color="#fff" />
                <Text style={styles.detailBtnTxt}>Mais detalhes</Text>
              </TouchableOpacity>
              <Text style={styles.caseValue}>
                {Intl.NumberFormat("pt-Br", {
                  style: "currency",
                  currency: "BRL"
                }).format(item.value)}
              </Text>
            </View>
          </View>
        )}
      />
    </View>
  );
}
