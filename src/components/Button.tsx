export type ButtonProps = {
  children: React.ReactNode;
};

export const Button = ({ children }: ButtonProps) => {
  return (
    <button className="bg-zinc-50 text-zinc-950 px-3 py-2 font-medium rounded-md hover:bg-zinc-200">
      {children}
    </button>
  );
};
