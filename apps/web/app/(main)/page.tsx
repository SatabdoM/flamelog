import { Logo } from '@workspace/ui/components/logo';

const HomePage = () => {
  return (
    <div className="flex items-center gap-6 py-6">
      <Logo size={50} shape="circle" />

      <div>
        <h1 className="text-2xl font-bold">FlameLog</h1>
        <p className="text-muted-foreground text-xl">The start of something great</p>
      </div>
    </div>
  );
};

export default HomePage;
