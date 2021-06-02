import React, {useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors} from '../../config/colors';
// import {SecondaryButton} from '../../components/buttons/SecondaryButton';
import {PrimaryButton} from '../../components/buttons/PrimaryButton';
import {PrimaryInput} from '../../components/forms/PrimaryInput';
import {SecondaryInput} from '../../components/forms/SecondaryInput';
export const SignUp = () => {
  // const [USN, setuserName] = useState('USN');
  // const [email, setemail] = useState('example@bmsce.ac.in');
  // const [password, setpassword] = useState('abc123');
  return (
    <View style={styles.container}>
      <Image
        style={styles.vector1}
        source={require('../../../assets/images/vector1.png')}
      />
      <Image
        style={styles.vector2}
        source={require('../../../assets/images/vector2.png')}
      />
      <Image
        style={styles.vector3}
        source={require('../../../assets/images/vector3.png')}
      />
      <Image
        style={styles.vector4}
        source={require('../../../assets/images/vector4.png')}
      />
      <View styles={styles.contentContainer}>
        <Image
          style={styles.back}
          source={require('../../../assets/images/back.png')}
        />
        <Text style={styles.heading}>Student SignUp </Text>
        <Text style={styles.or}></Text>
        <View style={styles.inputItem}>
          <PrimaryInput
            placeHolder={'Email Address'}
            isValid={true}
          />
        </View>
        <View style={styles.inputItem}>
          <PrimaryInput
            placeHolder={'USN'}
            isValid={true}
            // value={USN}
          />
        </View>
        <View style={styles.inputItem}>
          <PrimaryInput
            placeHolder={'Branch/Course'}
            isValid={true}
          />
        </View>
        <View style={styles.inputItem}>
          <PrimaryInput
            // value={email}
            placeHolder={'Semester'}
            isValid={true}
          />
        </View>
        <View style={styles.inputItem}>
          <SecondaryInput 
          // value={password} 
          placeHolder={'Password'} />
        </View>
        <View style={styles.getStartedbtnItemWrapper}>
          <PrimaryButton label={'Sign Up'} />
        </View>
      </View>
      <View style={styles.footerWrapper}>
        <Text style={styles.footerText}>
          <Text style={styles.footerText1}>SIGN UP AS FACULTY?  </Text>
          <Text style={styles.footerText2}>SIGN UP</Text>
        </Text>
      </View>
    </View>
  );
};

export const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    padding: 20,
  },
  vector1: {
    position: 'absolute',
    left: -10,
    top: -5,
  },
  vector2: {
    position: 'absolute',
    right: -6,
  },
  vector3: {
    position: 'absolute',
    top: 90,
  },
  vector4: {
    position: 'absolute',
    right: 0,
    top: 90,
  },
  contentContainer: {
    flex: 1,
  },
  back: {
    marginTop: 50,
  },
  heading: {
    fontSize: 30,
    fontWeight: '700',
    lineHeight: 40,
    textAlign: 'center',
    color: colors.heading,
  },
  btnWrapper: {
    marginTop: 30,
  },
  btnItemWrapper: {
    marginBottom: 20,
  },
  or: {
    textAlign: 'center',
    marginTop: 30,
    marginBottom: 30,
    fontSize: 14,
    fontWeight: '700',
    lineHeight: 30,
    color: colors.gray,
  },
  inputItem: {
    marginBottom: 20,
  },
  checkBox: {
    width: 24,
    height: 24,
  },
  privacyPolicyCheckWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  subTitle: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.gray,
  },
  link: {
    fontSize: 14,
    fontWeight: '400',
    color: colors.primary,
  },
  privacyPolicyLabelWrapper: {
    flexDirection: 'row',
  },
  getStartedbtnItemWrapper: {
    marginTop: 30,
  },
  footerText: {
    fontWeight: '400',
    fontSize: 14,
  },
  footerText1: {
    color: colors.gray,
  },
  footerText2: {
    color: colors.primary,
  },
  footerWrapper: {
    position: 'absolute',
    bottom: 30,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
});
