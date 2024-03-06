import { Card, Icon } from "@rneui/base";
import { useRouter } from "expo-router";
import { StyleSheet, TouchableOpacity, View } from "react-native";

interface HeaderTitleProps {
  title: string;
}

export const HeaderTitle = ({ title }: HeaderTitleProps) => {
  const router = useRouter();

  const handleBackPress = () => {
    if (router.canGoBack()) {
      router.back();
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.touchableIcon} onPress={handleBackPress}>
        <Icon name={"chevron-left"} size={50} />
      </TouchableOpacity>
      <Card.Title h4 style={styles.textTitle}>
        {title}
      </Card.Title>
      <View style={styles.emptyView} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  touchableIcon: {
    flex: 0.1,
    padding: 10,
  },
  textTitle: {
    flex: 0.8,
  },
  emptyView: {
    flex: 0.1,
  },
});