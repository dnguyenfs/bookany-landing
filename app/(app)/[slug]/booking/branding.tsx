export function Branding() {
  return (
    <div className="flex justify-between gap-2 p-4 items-center">
      <h4 className="text-xl font-semibold truncate">ARKITA HairSpa</h4>
      <div className="flex flex-col items-end">
        <p className="text-muted-foreground uppercase text-[8px]">Powered by</p>
        <p className="text-muted-foreground text-sm font-semibold tracking-wider">
          Bookany
        </p>
      </div>
    </div>
  );
}
