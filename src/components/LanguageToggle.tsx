
import React from "react";
import { useLanguage } from "@/contexts/LanguageContext";

// This component is no longer used for language toggling
// It's kept as a placeholder for future implementation if needed
const LanguageToggle = () => {
  const { t } = useLanguage();
  
  return null; // Return null since we're not using language toggle anymore
};

export default LanguageToggle;
