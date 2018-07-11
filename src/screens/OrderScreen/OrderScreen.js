import React, { Component } from "react";
import {
  View,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";
import { connect } from "react-redux";

import babyIcon from "./assets/icons/baby/baby.png";
import checkIcon from "./assets/icons/check/check.png";
import mapIcon from "./assets/icons/map/map.png";
import commentIcon from "./assets/icons/comment/comment.png";

import { mainColor } from "../../constants/colors";
import { KidsoutText, KidsoutButton } from "../../components";

const OrderScreen = ({
  order: { cost, commission, child, features, location, comment }
}) => (
  <View style={{ flex: 1 }}>
    <ScrollView style={styles.orderScreen}>
      <View style={styles.orderHeader}>
        <KidsoutText style={styles.costLabel}>Сумма заказа</KidsoutText>
        <KidsoutText bold style={styles.cost}>
          {cost + commission} руб.
        </KidsoutText>
        <View>
          <KidsoutText style={{ marginBottom: 5, fontSize: 13 }}>
            {cost} руб. — цена ситтера
          </KidsoutText>
          <KidsoutText style={{ fontSize: 13 }}>
            {commission} руб. - комиссия сервиса
          </KidsoutText>
        </View>
      </View>
      <View>
        <View style={styles.orderDetailsLabelWrapper}>
          <KidsoutText style={styles.orderDetailsLabel}>
            Подробнее о заказе
          </KidsoutText>
        </View>
        <View>
          <Detail
            icon={babyIcon}
            label={`${child.year} год, ${child.month} месяца`}
          />
          {features.map((feature, index) => (
            <Detail key={`feature${index}`} icon={checkIcon} label={feature} />
          ))}
          <Detail icon={mapIcon} label={location} />
          <Detail icon={commentIcon} label={comment} last />
        </View>
      </View>
    </ScrollView>
    <View
      style={{ position: "absolute", width: "100%", padding: 20, bottom: 0 }}
    >
      <KidsoutButton label={"Подтвердить"} />
    </View>
  </View>
);
const Detail = ({ icon, label, last }) => (
  <View style={styles.detailItem}>
    <View style={styles.detailItemIconWrapper}>
      <Image source={icon} />
    </View>
    <View style={styles.detailItemLabelWrapper}>
      <KidsoutText style={styles.detailItemLabel}>{label}</KidsoutText>
    </View>
  </View>
);

function mapStateToProps(state) {
  return {
    order: state.order
  };
}

export default connect(mapStateToProps)(OrderScreen);

const styles = StyleSheet.create({
  orderScreen: {
    flex: 1,
    backgroundColor: "white"
  },
  costLabel: {
    color: "rgba(0,0,0,0.5)",
    marginBottom: 10
  },
  cost: {
    color: mainColor,
    fontSize: 50,
    marginBottom: 10
  },
  orderDetailsLabel: {
    color: "#6D6D72",
    paddingLeft: 20
  },
  orderDetailsLabelWrapper: {
    height: 44,
    backgroundColor: "#F7F7F7",
    display: "flex",
    justifyContent: "center"
  },
  detailItem: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  detailItemLabel: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap"
  },
  detailItemLabelWrapper: {
    flex: 1,
    paddingVertical: 12,
    paddingRight: 10,
    borderBottomWidth: 1,
    borderColor: "#D9D9D9",
    display: "flex",
    justifyContent: "center"
  },
  detailItemIconWrapper: {
    width: 58,
    display: "flex",
    alignItems: "center"
  },
  orderHeader: {
    height: 212,
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
});
