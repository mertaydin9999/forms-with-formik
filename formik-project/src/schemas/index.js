import * as yup from "yup";

const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;

export const basicSchema = yup.object().shape({
  email: yup
    .string()
    .email("Gecerli bir email giriniz")
    .required("Email girmek zorunludur"),
  age: yup
    .number()
    .positive("Lutfen pozitif bir yas giriniz")
    .integer("Lutfen tam sayi giriniz")
    .required("Yas girmek zorunludur"),
  password: yup
    .string()
    .min(5, "Sifreniz 5 karakterden az olamaz")
    .matches(passwordRules, {
      message: "Lutfen en az 1 buyuk harf, 1 kucuk harf ve 1 sayi giriniz",
    })
    .required("Sifre girmek zorunludur"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Sifreler eslesmiyor")
    .required("Tekrar sifre girmek zorunludur"),
});

export const advancedSchema = yup.object().shape({
    username: yup
      .string()
      .min(3,'Kullanici adi minimum 3 karakter uzunlugunda olmalidir')
      .required("Kullanici adi zorunludur"),
    university: yup.string().oneOf(['bogazici','gsu','odtu','itu'],'Lutfen universitenizi seciniz').required('Lutfen universitenizi seciniz')
      ,
    isAccepted: yup.boolean().oneOf([true],'Kullanim kosullarini kabul ediniz')
      
  });
  
