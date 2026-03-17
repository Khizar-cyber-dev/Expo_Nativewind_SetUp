import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center bg-white px-6">
      <View className="w-full max-w-md rounded-2xl bg-slate-900 p-6">
        <Text className="text-2xl font-bold text-white">Bismillah</Text>
        <Text className="mt-2 text-base text-slate-200">
          Tailwind (NativeWind) is working if you see this dark card.
        </Text>
        <View className="mt-4 h-2 w-full rounded-full bg-slate-700">
          <View className="h-2 w-2/3 rounded-full bg-sky-500" />
        </View>
      </View>
    </View>
  );
}
