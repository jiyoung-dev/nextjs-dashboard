import { Inter, Lusitana } from 'next/font/google';

export const inter = Inter({ subsets: ['latin'] });

// Lusitana 폰트 설정
export const lusitana = Lusitana({
  subsets: ['latin'], // 필요한 subset을 설정합니다.
  weight: ['400', '700'], // 사용하려는 weight를 설정합니다.
});
