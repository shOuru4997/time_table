import React from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {colors} from '../../config/colors';

import {styles} from './styles';
export const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.heading}>Good Morning, User</Text>
        <Text style={styles.subHeading}>We Wish you have a good day</Text>
      </View>
      <View style={styles.sectionWrapper1}>
        <View style={styles.item1}>
          <Image
            style={styles.basicImg}
            source={require('../../../assets/images/basicImg.png')}
          />
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, {color: colors.whiteShade}]}>
              Time Table
            </Text>
            <Text style={[styles.cardSubTitle, {color: colors.whiteShade}]}>
              Updated today
            </Text>
          </View>
          <View style={styles.cardFooterWrapper}>
            <View>
              <Text style={[styles.footerTitle, {color: colors.whiteShadeBg}]}>
                {/* 3-10 MIN */}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={[
                  styles.cardBtn,
                  {backgroundColor: colors.whiteShadeBg},
                ]}>
                <Text style={styles.btnLabel}>SHOW</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.item2}>
          <Image 
          style={styles.basicImg} 
          source={require('../../../assets/images/relaxationimg.png')} />
          <View style={styles.cardContent}>
            <Text style={[styles.cardTitle, {color: colors.heading}]}>
              Semester Curriculam
            </Text>
            <Text style={[styles.cardSubTitle, {color: colors.heading}]}>
              {/* MUSIC */}
            </Text>
          </View>
          <View style={styles.cardFooterWrapper}>
            <View>
              <Text style={[styles.footerTitle, {color: colors.heading}]}>
                {/* 3-10 MIN */}
              </Text>
            </View>
            <View>
              <TouchableOpacity
                style={[styles.cardBtn, {backgroundColor: colors.heading}]}>
                <Text style={[styles.btnLabel, {color: colors.whiteShadeBg}]}>
                  SHOW
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.dailyThoughtsWrapper}>
        <Image
          style={styles.bgShape1}
          source={require('../../../assets/images/bgShape1.png')}
        />
        <Image
          style={styles.bgShape2}
          source={require('../../../assets/images/bgShape2.png')}
        />
        <Image
          style={styles.bgShape3}
          source={require('../../../assets/images/bgShape3.png')}
        />
        <View>
          <Text style={styles.dailyTitle}>Exam Date-Sheet</Text>
          <Text style={styles.dailySubTitle}>Updated on 07/04/2021</Text>
        </View>
        <View>
              <TouchableOpacity
                style={[
                  styles.examBtn,
                  {backgroundColor: colors.whiteShadeBg},
                ]}>
                <Text style={styles.examtxt}>SHOW</Text>
              </TouchableOpacity>
            </View>
        <View>
          {/* <Image source={require('../../../assets/images/player.png')} /> */}
        </View>
      </View>
      <View style={styles.recommendWrapper}>
        <Text style={styles.recommendTitle}>Browse More</Text>
        <ScrollView horizontal={true}>
          <View style={[styles.recommedCard]}>
            <View
              style={[
                styles.recommednImgWrapper,
                {backgroundColor: '#afdbc5'},
              ]}>
              {/* <Image
                source={require('../../../assets/images/recommend1.png')}
              /> */}
            </View>
            <View style={styles.recommendCardContentWrapper}>
              <Text style={styles.recommentContentTitle}>Project/AAT deadline</Text>
              <Text style={styles.recommentContentSubTitle}>
                Updated on yesterday
              </Text>
            </View>
          </View>
          <View style={[styles.recommedCard]}>
            <View
              style={[
                styles.recommednImgWrapper,
                {backgroundColor: '#fcdea5'},
              ]}>
              {/* <Image
                source={require('../../../assets/images/recommend2.png')}
              /> */}
            </View>
            <View style={styles.recommendCardContentWrapper}>
              <Text style={styles.recommentContentTitle}>Profile</Text>
              <Text style={styles.recommentContentSubTitle}>
                Your profile
              </Text>
            </View>
          </View>
          <View style={[styles.recommedCard]}>
            <View
              style={[
                styles.recommednImgWrapper,
                {backgroundColor: '#afdbc5'},
              ]}>
              {/* <Image
                source={require('../../../assets/images/recommend1.png')}
              /> */}
            </View>
            <View style={styles.recommendCardContentWrapper}>
              <Text style={styles.recommentContentTitle}>Log Out</Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};
