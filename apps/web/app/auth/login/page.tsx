import Image from 'next/image';

import { LoginForm } from '@/components/login-form';
import { Logo } from '@workspace/ui/components/logo';
import logo from '@workspace/ui/assets/images/logo.png';

const LoginPage = () => {
  return (
    <div className="grid min-h-svh lg:grid-cols-7">
      <div className="bg-muted relative hidden lg:col-span-3 lg:block">
        <Image
          src={logo}
          alt="Image"
          width={1000}
          height={1000}
          className="absolute h-full w-full object-cover dark:brightness-[0.2] dark:grayscale"
        />
      </div>

      <div className="flex flex-col gap-4 p-6 md:p-10 lg:col-span-4 lg:col-start-4">
        <div className="flex justify-center gap-2">
          <Logo text="FlameLog" shape="circle" />
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
