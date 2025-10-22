import { CookMode } from "@/components/meal-vote/CookMode";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";

const sampleSteps = [
  {
    id: "1",
    instruction: "Heat 2 tablespoons of oil in a large wok or skillet over high heat until shimmering.",
    duration: 2
  },
  {
    id: "2",
    instruction: "Add minced garlic and sliced chilies. Stir-fry for 30 seconds until fragrant.",
    duration: 1
  },
  {
    id: "3",
    instruction: "Add chicken pieces and stir-fry for 5-7 minutes until cooked through and golden brown.",
    duration: 7
  },
  {
    id: "4",
    instruction: "Add sliced bell peppers and onions. Stir-fry for 2-3 minutes until vegetables are tender-crisp.",
    duration: 3
  },
  {
    id: "5",
    instruction: "Add soy sauce, oyster sauce, and a splash of fish sauce. Stir to coat everything evenly.",
  },
  {
    id: "6",
    instruction: "Turn off heat and fold in fresh Thai basil leaves. Stir until wilted.",
  },
  {
    id: "7",
    instruction: "Serve immediately over steamed jasmine rice. Garnish with extra basil leaves and sliced chilies if desired.",
  }
];

const CookDemo = () => {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleComplete = () => {
    toast({
      title: "Cooking complete!",
      description: "Great job! Hope it was delicious.",
    });
    setTimeout(() => navigate("/demo/planning"), 2000);
  };

  const handleExit = () => {
    navigate("/demo/planning");
  };

  return (
    <CookMode
      recipeName="Spicy Thai Basil Chicken"
      steps={sampleSteps}
      totalTime={30}
      onComplete={handleComplete}
      onExit={handleExit}
    />
  );
};

export default CookDemo;
