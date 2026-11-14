import Legal from '@/components/Legal';
export const metadata = { title: 'Cookie Policy' };
export default function C() { return <Legal title="Cookie Policy" sections={[['What cookies are', 'Small files stored on your device by websites.'], ['Cookies we use', 'This site currently sets no analytics or advertising cookies. [Update this section if you add analytics.]'], ['Managing cookies', 'You can block or delete cookies in your browser settings.']]} />; }
