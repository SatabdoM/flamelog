import { Button } from '@workspace/ui/components/button';

const HomePage = () => {
  return (
    <div className="flex min-h-svh items-center justify-center">
      <div className="flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">This is web app</h1>
        <Button>Button</Button>

        <div className="flex" />
      </div>
    </div>
  );
};

export default HomePage;
