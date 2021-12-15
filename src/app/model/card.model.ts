export class Card {
  id: string = '';
  title: string = '';
  image: string = '';
  link: string = '';
}

export const CARDS = [
  {id: '1', title: '1', image: 'bg-Asthangaasana_1', link: 'https://www.yogaindailylife.org/system/hu/1-szint/sarva-hita-%C3%A1szan%C3%A1k-2-r%C3%A9sz/khatu-pranam'},
  {id: '2', title: '1', image: 'bg-Asthangaasana_2', link: 'https://www.yogaindailylife.org/system/hu/1-szint/sarva-hita-%C3%A1szan%C3%A1k-2-r%C3%A9sz/khatu-pranam'},
  {id: '3', title: '2', image: 'bg-BaddhaKonasana_1', link: 'https://www.yogaindailylife.org/system/hu/1-szint/sarva-hita-%C3%A1szan%C3%A1k-4-r%C3%A9sz/pillang%C3%B3'},
  {id: '4', title: '2', image: 'bg-BaddhaKonasana_2', link: 'https://www.yogaindailylife.org/system/hu/1-szint/sarva-hita-%C3%A1szan%C3%A1k-4-r%C3%A9sz/pillang%C3%B3'},
  {id: '5', title: '3', image: 'bg-Bakasana_1', link: 'https://www.yogaindailylife.org/system/hu/4-szint/bakasana'},
  {id: '6', title: '3', image: 'bg-Bakasana_2', link: 'https://www.yogaindailylife.org/system/hu/4-szint/bakasana'},
  {id: '7', title: '4', image: 'bg-Bhujangasana_1', link: 'https://www.yogaindailylife.org/system/hu/5-szint/bhujangasana'},
  {id: '8', title: '4', image: 'bg-Bhujangasana_2', link: 'https://www.yogaindailylife.org/system/hu/5-szint/bhujangasana'},
  {id: '9', title: '5', image: 'bg-Chatushpadasana_1', link: 'https://www.yogaindailylife.org/system/hu/2-szint/chatushpadasana'},
  {id: '10', title: '5', image: 'bg-Chatushpadasana_2', link: 'https://www.yogaindailylife.org/system/hu/2-szint/chatushpadasana'},
  {id: '11', title: '6', image: 'bg-Garudasana_1', link: 'https://www.yogaindailylife.org/system/hu/3-szint/garudasana'},
  {id: '12', title: '6', image: 'bg-Garudasana_2', link: 'https://www.yogaindailylife.org/system/hu/3-szint/garudasana'},
  {id: '13', title: '7', image: 'bg-Gomukhasana_1', link: 'https://www.yogaindailylife.org/system/hu/4-szint/gomukhasana'},
  {id: '14', title: '7', image: 'bg-Gomukhasana_2', link: 'https://www.yogaindailylife.org/system/hu/4-szint/gomukhasana'},
  {id: '15', title: '8', image: 'bg-Hansasana_1', link: 'https://www.yogaindailylife.org/system/hu/3-szint/hansasana'},
  {id: '16', title: '8', image: 'bg-Hansasana_2', link: 'https://www.yogaindailylife.org/system/hu/3-szint/hansasana'},
  {id: '17', title: '9', image: 'bg-KawaChalasana_1', link: 'https://www.yogaindailylife.org/system/hu/1-szint/sarva-hita-%C3%A1szan%C3%A1k-6-r%C3%A9sz/varj%C3%BAj%C3%A1r%C3%A1s'},
  {id: '18', title: '9', image: 'bg-KawaChalasana_2', link: 'https://www.yogaindailylife.org/system/hu/1-szint/sarva-hita-%C3%A1szan%C3%A1k-6-r%C3%A9sz/varj%C3%BAj%C3%A1r%C3%A1s'},
  {id: '19', title: '10', image: 'bg-Kurmasana_1', link: 'https://www.yogaindailylife.org/system/hu/6-szint/kurmasana'},
  {id: '20', title: '10', image: 'bg-Kurmasana_2', link: 'https://www.yogaindailylife.org/system/hu/6-szint/kurmasana'},
  {id: '21', title: '11', image: 'bg-MandukiAsana_1', link: 'https://www.jogaszeged.hu/jogazz-velunk/joga/joga-gyerekekkel'},
  {id: '22', title: '11', image: 'bg-MandukiAsana_2', link: 'https://www.jogaszeged.hu/jogazz-velunk/joga/joga-gyerekekkel'},
  {id: '23', title: '12', image: 'bg-Marjari_1', link: 'https://www.yogaindailylife.org/system/hu/1-szint/sarva-hita-%C3%A1szan%C3%A1k-1-r%C3%A9sz/marjari'},
  {id: '24', title: '12', image: 'bg-Marjari_2', link: 'https://www.yogaindailylife.org/system/hu/1-szint/sarva-hita-%C3%A1szan%C3%A1k-1-r%C3%A9sz/marjari'},
  {id: '25', title: '13', image: 'bg-Matsyasana_1', link: 'https://www.yogaindailylife.org/system/hu/5-szint/matsyasana'},
  {id: '26', title: '13', image: 'bg-Matsyasana_2', link: 'https://www.yogaindailylife.org/system/hu/5-szint/matsyasana'},
  {id: '27', title: '14', image: 'bg-Mayurasana_1', link: 'https://www.yogaindailylife.org/system/hu/6-szint/mayurasana'},
  {id: '28', title: '14', image: 'bg-Mayurasana_2', link: 'https://www.yogaindailylife.org/system/hu/6-szint/mayurasana'},
  {id: '29', title: '15', image: 'bg-Mrigasana_1', link: 'https://www.yogaindailylife.org/system/hu/6-szint/mrigasana'},
  {id: '30', title: '15', image: 'bg-Mrigasana_2', link: 'https://www.yogaindailylife.org/system/hu/6-szint/mrigasana'},
  {id: '31', title: '16', image: 'bg-Shalabhasana_1', link: 'https://www.yogaindailylife.org/system/hu/5-szint/shalabhasana'},
  {id: '32', title: '16', image: 'bg-Shalabhasana_2', link: 'https://www.yogaindailylife.org/system/hu/5-szint/shalabhasana'},
  {id: '33', title: '17', image: 'bg-Shashankasana_1', link: 'https://www.yogaindailylife.org/system/hu/2-szint/shashankasana'},
  {id: '34', title: '17', image: 'bg-Shashankasana_2', link: 'https://www.yogaindailylife.org/system/hu/2-szint/shashankasana'},
  {id: '35', title: '18', image: 'bg-Simhasana_1', link: 'https://www.yogaindailylife.org/system/hu/4-szint/simhasana'},
  {id: '36', title: '18', image: 'bg-Simhasana_2', link: 'https://www.yogaindailylife.org/system/hu/4-szint/simhasana'},
  {id: '37', title: '19', image: 'bg-Ushtrasana_1', link: 'https://www.yogaindailylife.org/system/hu/3-szint/ushtrasana'},
  {id: '38', title: '19', image: 'bg-Ushtrasana_2', link: 'https://www.yogaindailylife.org/system/hu/3-szint/ushtrasana'},
  {id: '39', title: '20', image: 'bg-Vyaghrasana_1', link: 'https://www.yogaindailylife.org/system/hu/3-szint/vyaghrasana'},
  {id: '40', title: '20', image: 'bg-Vyaghrasana_2', link: 'https://www.yogaindailylife.org/system/hu/3-szint/vyaghrasana'}
];
