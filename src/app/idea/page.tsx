import { TypewriterEffectDemo } from "../components/ui/TypewriterEffectDemo";
import { BackgroundLines } from "../components/ui/background-lines";

export default function IdeaPage() {
  return (
    <BackgroundLines className="flex items-center justify-center w-full flex-col px-4">
      <div className="flex flex-col items-center justify-center min-h-screen p-4">
      <TypewriterEffectDemo />
    </div>
    </BackgroundLines>
    
  );
}