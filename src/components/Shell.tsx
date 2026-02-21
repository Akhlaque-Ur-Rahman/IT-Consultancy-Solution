import ChromeClient from '@/components/ChromeClient';

export default function Shell({ children }: { children: React.ReactNode }) {
  return <ChromeClient>{children}</ChromeClient>;
}
