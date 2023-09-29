import { ref, onMounted, watch } from 'vue'

export default function useTheme() {
  const theme = ref("")

  // On mounted, get the theme from local storage
  onMounted(() => {
    theme.value = localStorage.getItem("theme") || "light"

  console.log(localStorage.getItem("theme"))
    
    // Set the theme on the document
    document.documentElement.setAttribute("data-theme", theme.value)
  })

  // watcher to save into localstorage and update the theme on the document
  watch(theme, (newTheme: string) => {
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  });

  // Function to toggle theme
  const toggleTheme = () => {
    theme.value = theme.value === "dark" ? "light" : "dark";
  };

  return {
    theme,
    toggleTheme,
  }
}