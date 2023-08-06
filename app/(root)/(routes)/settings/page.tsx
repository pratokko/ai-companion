import SubscriptioButton from "@/components/subscription-button";
import { checkSubscription } from "@/lib/subscription";

const SettingsPage = async () => {
  const isPro = await checkSubscription();
  return (
    <div className="h-full p-4 space-y-2">
      <h3 className="text-lg font-medium">Settings</h3>
      <div className="text-muted-foreground text-sm">
        {isPro ? " You are currently on a pro plan" : "You are currently on a free plan"}
      </div>
      <SubscriptioButton isPro={isPro} />
    </div>
  );
};
export default SettingsPage;
