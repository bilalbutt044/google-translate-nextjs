import Cookies from "js-cookie";
import { useEffect, useState } from "react";
import styles from "./langauge.module.css";

const languages = [
  { label: "English", value: "/auto/en" },
  { label: "Nederlands", value: "/auto/nl" },
];

const LanguageDrawer = ({}) => {
  const selectedLanguage = Cookies.get("googtrans") || "/auto/en";

  const [selected, setSelected] = useState("");

  useEffect(() => {
    const selectedLanguage = Cookies.get("googtrans") || "/auto/en";
    setSelected(selectedLanguage);
  }, []);

  useEffect(() => {
    var addScript = document.createElement("script");
    addScript.setAttribute(
      "src",
      "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
    );
    document.body.appendChild(addScript);

    window.googleTranslateElementInit = googleTranslateElementInit;
  }, []);

  const googleTranslateElementInit = () => {
    new window.google.translate.TranslateElement(
      {
        pageLanguage: selected,
        autoDisplay: false,
        includedLanguages: "en,nl", // If you remove it, by default all google supported language will be included
        layout: google?.translate?.TranslateElement?.InlineLayout.SIMPLE,
      },
      "google_translate_element"
    );
  };

  const langChange = (e) => {
    const value = e.target.value;
    if (selectedLanguage) {
      Cookies.set("googtrans", decodeURI(value));
      setSelected(value);
    } else {
      Cookies.set("googtrans", value);
      setSelected(value);
    }
    window.location.reload();
  };

  return (
    <>
      <select onChange={langChange} value={selected}>
        {languages.map((lang) => (
          <option value={lang.value} key={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </>
  );
};

export default LanguageDrawer;
