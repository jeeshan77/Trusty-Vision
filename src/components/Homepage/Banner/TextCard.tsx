interface HomepageTextCardProps {
  label: string;
  text: string;
}

export default function HomepageTextCard(props: HomepageTextCardProps) {
  const { label, text } = props;
  return (
    <div className='flex w-full flex-col rounded-3xl bg-primary/20 p-5 backdrop-blur-md md:max-w-[300px]'>
      <span className='font-sans text-lg text-secondary'>{label}</span>
      <p className='text-justify text-sm text-gray-400'>{text}</p>
    </div>
  );
}
