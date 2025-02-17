import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import images from '@/constants/images'
import { useGlobalContext } from '@/lib/global-provider'
import icons from '@/constants/icons'
import Search from '@/components/Search'
import { Card, FeaturedCard } from '@/components/Cards'

const Home = () => {
  const { user } = useGlobalContext();

  return (
    <SafeAreaView className='bg-white h-full'>
      <View className='px-5'>
        <View className='flex flex-row items-center justify-between mt-5'>
          <View className='flex flex-row items-center'>
            <Image
              source={{ uri: user?.avatar }}
              className="size-12 rounded-full"
            />

            <View className="flex flex-col items-start ml-2 justify-center">
              <Text className="text-xs font-rubik text-black-100">
                Good Morning
              </Text>
              <Text className="text-base font-rubik-medium text-black-300">
                {user?.name}
              </Text>
            </View>
          </View>

          <Image source={icons.bell} className="size-6" />
        </View>

        <Search />

        <View className='my-5'>
          <View className='flex flex-row items-center justify-between'>
            <Text className="text-xl font-rubik-bold text-black-300">
              Featured
            </Text>
            <TouchableOpacity>
              <Text className="text-base font-rubik-bold text-primary-300">
                See all
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Home