import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

export default function Index() {
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const sections = [
    { id: 'home', name: 'Главная', icon: 'Home' },
    { id: 'about', name: 'О семье', icon: 'Users' },
    { id: 'gallery', name: 'Фотогалерея', icon: 'Image' },
    { id: 'history', name: 'Наша история', icon: 'BookOpen' },
    { id: 'achievements', name: 'Достижения', icon: 'Trophy' },
    { id: 'contacts', name: 'Контакты', icon: 'Mail' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-background via-background to-card">
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent">
              Моя семья — Мой космос
            </h1>
            <div className="hidden md:flex gap-6">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => scrollToSection(section.id)}
                  className={`flex items-center gap-2 transition-colors hover:text-primary ${
                    activeSection === section.id ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  <Icon name={section.icon} size={18} />
                  <span className="font-medium">{section.name}</span>
                </button>
              ))}
            </div>
            <Button variant="outline" className="md:hidden" size="icon">
              <Icon name="Menu" size={24} />
            </Button>
          </div>
        </div>
      </nav>

      <section id="home" className="min-h-screen flex items-center justify-center pt-20 px-4">
        <div className="text-center max-w-4xl mx-auto animate-fade-in">
          <div className="mb-8 relative">
            <div className="absolute inset-0 bg-primary/20 blur-3xl rounded-full animate-float"></div>
            <h2 className="text-6xl md:text-8xl font-black mb-4 bg-gradient-to-r from-primary via-secondary to-accent bg-clip-text text-transparent relative z-10">
              Моя семья
            </h2>
            <p className="text-3xl md:text-5xl font-bold text-accent relative z-10">Мой космос</p>
          </div>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Наша семья — это целая вселенная любви, поддержки и незабываемых моментов
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-to-r from-primary to-secondary hover:opacity-90 transition-opacity text-lg px-8 py-6"
            onClick={() => scrollToSection('about')}
          >
            Начать путешествие
            <Icon name="Rocket" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      <section id="about" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
            О нашей семье
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 animate-scale-in">
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-primary/20 p-4 rounded-full">
                    <Icon name="Heart" size={32} className="text-primary" />
                  </div>
                  <h3 className="text-2xl font-bold">Наши ценности</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Любовь, уважение, взаимопонимание и поддержка — это основа нашей семьи. 
                  Мы всегда рядом друг с другом в радости и в трудные моменты.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-card/50 backdrop-blur border-border hover:border-secondary transition-all duration-300 animate-scale-in" style={{ animationDelay: '0.1s' }}>
              <CardContent className="p-8">
                <div className="flex items-center gap-4 mb-4">
                  <div className="bg-secondary/20 p-4 rounded-full">
                    <Icon name="Sparkles" size={32} className="text-secondary" />
                  </div>
                  <h3 className="text-2xl font-bold">Наши традиции</h3>
                </div>
                <p className="text-muted-foreground leading-relaxed">
                  Совместные ужины, семейные поездки и праздники — это то, что делает нашу семью особенной. 
                  Мы создаём воспоминания, которые остаются навсегда.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="gallery" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto w-full">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Фотогалерея
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <Card key={i} className="aspect-square overflow-hidden group cursor-pointer hover:scale-105 transition-transform duration-300">
                <CardContent className="p-0 h-full relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-secondary/20 to-accent/20 flex items-center justify-center">
                    <Icon name="Image" size={48} className="text-muted-foreground group-hover:scale-110 transition-transform" />
                  </div>
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="history" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-accent to-primary bg-clip-text text-transparent">
            Наша история
          </h2>
          <div className="space-y-8">
            {[
              { year: '2010', title: 'Знакомство', icon: 'Sparkle' },
              { year: '2012', title: 'Создание семьи', icon: 'Heart' },
              { year: '2015', title: 'Рождение первого ребёнка', icon: 'Baby' },
              { year: '2020', title: 'Переезд в новый дом', icon: 'Home' },
              { year: '2024', title: 'Наши дни', icon: 'Star' }
            ].map((event, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-accent transition-all duration-300 animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 flex items-center gap-6">
                  <div className="bg-accent/20 p-4 rounded-full flex-shrink-0">
                    <Icon name={event.icon} size={32} className="text-accent" />
                  </div>
                  <div>
                    <div className="text-accent font-bold text-lg mb-1">{event.year}</div>
                    <h3 className="text-2xl font-bold">{event.title}</h3>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="achievements" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
            Достижения семьи
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { icon: 'GraduationCap', title: 'Образование', desc: 'Высшее образование у всех членов семьи' },
              { icon: 'Trophy', title: 'Спортивные успехи', desc: 'Победы в соревнованиях и марафонах' },
              { icon: 'Briefcase', title: 'Карьера', desc: 'Успехи в профессиональной сфере' },
              { icon: 'Palette', title: 'Творчество', desc: 'Участие в выставках и конкурсах' },
              { icon: 'Globe', title: 'Путешествия', desc: 'Посещено более 20 стран' },
              { icon: 'HeartHandshake', title: 'Благотворительность', desc: 'Помощь нуждающимся' }
            ].map((achievement, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur border-border hover:border-primary transition-all duration-300 hover:scale-105 animate-scale-in" style={{ animationDelay: `${index * 0.1}s` }}>
                <CardContent className="p-6 text-center">
                  <div className="bg-primary/20 p-4 rounded-full w-fit mx-auto mb-4">
                    <Icon name={achievement.icon} size={40} className="text-primary" />
                  </div>
                  <h3 className="text-xl font-bold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground text-sm">{achievement.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contacts" className="min-h-screen flex items-center justify-center px-4 py-20">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8 bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
            Контакты
          </h2>
          <p className="text-xl text-muted-foreground mb-12">
            Мы всегда рады новым знакомствам и общению!
          </p>
          <div className="space-y-6">
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-primary/20 p-3 rounded-full">
                  <Icon name="Mail" size={24} className="text-primary" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Email</div>
                  <div className="font-medium">family@example.com</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-secondary/20 p-3 rounded-full">
                  <Icon name="Phone" size={24} className="text-secondary" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Телефон</div>
                  <div className="font-medium">+7 (XXX) XXX-XX-XX</div>
                </div>
              </CardContent>
            </Card>
            <Card className="bg-card/50 backdrop-blur border-border">
              <CardContent className="p-6 flex items-center gap-4">
                <div className="bg-accent/20 p-3 rounded-full">
                  <Icon name="MapPin" size={24} className="text-accent" />
                </div>
                <div className="text-left">
                  <div className="text-sm text-muted-foreground">Адрес</div>
                  <div className="font-medium">Москва, Россия</div>
                </div>
              </CardContent>
            </Card>
          </div>
          <div className="flex justify-center gap-4 mt-12">
            <Button variant="outline" size="icon" className="rounded-full hover:bg-primary/20 hover:border-primary">
              <Icon name="Instagram" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-secondary/20 hover:border-secondary">
              <Icon name="Facebook" size={20} />
            </Button>
            <Button variant="outline" size="icon" className="rounded-full hover:bg-accent/20 hover:border-accent">
              <Icon name="Twitter" size={20} />
            </Button>
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8 px-4">
        <div className="max-w-6xl mx-auto text-center text-muted-foreground">
          <p>© 2024 Моя семья — Мой космос. Создано с любовью ❤️</p>
        </div>
      </footer>
    </div>
  );
}
