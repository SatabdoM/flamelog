import { Logo } from '@workspace/ui/components/logo';

const HomePage = () => {
  return (
    <div className="flex items-center gap-6 py-6">
      <Logo size={80} shape="circle" />

      <div className="space-y-1.5">
        <h1 className="text-4xl font-bold">FlameLog</h1>
        <p className="text-muted-foreground text-xl">The start of something great</p>
      </div>
    </div>
  );
};

export default HomePage;
