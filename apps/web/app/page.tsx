import { Button } from "@workspace/ui/components/button";

const HomePage = () => {
  return (
    <div className="flex items-center justify-center min-h-svh">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">This is web app</h1>
        <Button>Button</Button>
      </div>
    </div>
  );
};

export default HomePage;
