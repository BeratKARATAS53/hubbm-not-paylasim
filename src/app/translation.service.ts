import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Translations {
	[key: string]: {
		tr: string;
		en: string;
	};
}

@Injectable({
	providedIn: 'root'
})
export class TranslationService {
	private currentLangSubject = new BehaviorSubject<string>('tr');
	currentLang$ = this.currentLangSubject.asObservable();

	private translations: Translations = {
		'home': { tr: 'Ana Sayfa', en: 'Home' },
		'firstClassLessons': { tr: '1. Sınıf Dersleri', en: '1st Year Lessons' },
		'secondClassLessons': { tr: '2. Sınıf Dersleri', en: '2nd Year Lessons' },
		'thirdClassLessons': { tr: '3. Sınıf Dersleri', en: '3rd Year Lessons' },
		'fourthClassLessons': { tr: '4. Sınıf Dersleri', en: '4th Year Lessons' },
		'technicalLessons': { tr: 'Teknik Dersler', en: 'Technical Lessons' },
		'versionNotes': { tr: 'Sürüm Notları', en: 'Version Notes' },
		'aboutMe': { tr: 'Hakkımda', en: 'About Me' },
		'welcomeText': { tr: 'Notunuz Mu Var? Gelin Paylaşalım', en: 'Have Notes? Let\'s Share' },
		'searchPlaceholder': { tr: 'Ara... (en az 3 karakter)', en: 'Search... (min 3 chars)' },
		'copyright': { tr: '© 2026 HUBBM Not Paylaşım. Tüm hakları saklıdır.', en: '© 2026 HUBBM Not Sharing. All rights reserved.' },
		'back': { tr: 'Geri Dön', en: 'Back' },
		'aboutCourse': { tr: 'Ders Hakkında', en: 'About the Course' },
		'usefulLinks': { tr: 'Yararlı Notlar veya Linkler', en: 'Useful Notes or Links' },
		'books': { tr: 'Kitaplar ve Kaynaklar', en: 'Books and Resources' },
		'share': { tr: 'Paylaş', en: 'Share' },
		'copyLink': { tr: 'Linki Kopyala', en: 'Copy Link' },
		'copied': { tr: 'Kopyalandı!', en: 'Copied!' },
		'close': { tr: 'Kapat', en: 'Close' },
		'coursePage': { tr: 'Ders Sayfası', en: 'Course Page' },
		'linkCopied': { tr: 'Bağlantı kopyalandı!', en: 'Link copied!' },
		'notFound': { tr: 'Aradığınız kriterlere uygun ders bulunamadı.', en: 'No lessons found matching your criteria.' },
		'premiumRedesign': { tr: 'Premium Yenilenme', en: 'Premium Redesign' },
		'modernDesign': { tr: 'Modern Tasarım', en: 'Modern Design' },
		'designSub': { tr: 'Tamamen yenilenmiş, premium ve dinamik arayüz.', en: 'Completely redesigned, premium and dynamic interface.' },
		'speed': { tr: 'Hız ve Hafiflik', en: 'Speed and Lightness' },
		'speedSub': { tr: 'Bootstrap ve ağır kütüphaneler kaldırılarak Vanilla CSS\'e geçildi.', en: 'Switched to Vanilla CSS by removing Bootstrap and heavy libraries.' },
		'details': { tr: 'Detay Sayfası', en: 'Details Page' },
		'detailsSub': { tr: 'Ders notlarına ve kaynaklara daha şık bir erişim sağlandı.', en: 'A more stylish access to lesson notes and resources.' },
		'shareFeat': { tr: 'Paylaşım Özelliği', en: 'Sharing Feature' },
		'shareFeatSub': { tr: 'Ders sayfalarını kolayca paylaşabilme özelliği eklendi.', en: 'Added feature to easily share lesson pages.' },
		'ads': { tr: 'Reklam Yerleşimi', en: 'Ad Placement' },
		'adsSub': { tr: 'Kullanıcı deneyimini bozmayan yeni reklam yerleşimi.', en: 'New ad placement that doesn\'t disrupt user experience.' },
		'firstVersion': { tr: 'İlk Sürüm', en: 'Initial Version' },
		'firstVersionSub': { tr: 'Platformun ilk yayınlanışı.', en: 'First release of the platform.' },
		'lessonNotesShared': { tr: 'Temel ders notları ve linkleri paylaşıldı.', en: 'Basic lesson notes and links were shared.' },

		'v100': { tr: 'Yeni tasarım ile birlikte site yenilendi ve özel alan adına taşındı. 1. sınıf dersleri eklendi. (Yasin Şimşek\'e teşekkürler.)', en: 'Site renewed with new design and moved to private domain. 1st year lessons added. (Thanks to Yasin Şimşek.)' },
		'v030': { tr: '2. sınıf dersleri eklendi.', en: '2nd year lessons added.' },
		'v020': { tr: 'Bazı hatalardan dolayı reklam kaldırıldı. Tema değiştirildi. Site tasarımına ufak dokunuşlar yapıldı. Sürüm Notları sayfası eklendi. Bazı hatalar giderildi.', en: 'Ad removed due to some errors. Theme changed. Minor touches to site design. Version Notes page added. Some bugs fixed.' },
		'v010': { tr: 'Haliyle ilk olarak site tasarlandı :D Notları eklenecek dersler belirlendi. Bazı zorunlu derslerin notları eklendi. Reklam eklendi (Link.TL).', en: 'Naturally, the site was designed first :D Courses to be added were determined. Notes for some mandatory courses added. Ad added (Link.TL).' },

		'contactMe': { tr: 'Bana Ulaşın', en: 'Contact Me' },
		'name': { tr: 'Ad Soyad', en: 'Full Name' },
		'email': { tr: 'E-posta', en: 'Email' },
		'subject': { tr: 'Konu', en: 'Subject' },
		'content': { tr: 'Mesajınız', en: 'Your Message' },
		'send': { tr: 'Gönder', en: 'Send' },
		'sending': { tr: 'Gönderiliyor...', en: 'Sending...' },
		'messageSent': { tr: 'Mesajınız başarıyla iletildi!', en: 'Your message has been sent successfully!' },
		'messageError': { tr: 'Mesaj gönderilirken bir hata oluştu.', en: 'An error occurred while sending the message.' },
		'validationError': { tr: 'Lütfen tüm alanları doldurun.', en: 'Please fill in all fields.' },

		'understand': { tr: 'Anladım', en: 'Got it' },
		'datePrefix': { tr: 'Tarih', en: 'Date' },
		
		// Lesson Titles
		'AIN101': { tr: 'Birinci Sınıf Semineri', en: 'Freshman Seminar' },
		'BBM101': { tr: 'Programlamaya Giriş 1', en: 'Introduction to Programming 1' },
		'BBM102': { tr: 'Programlamaya Giriş 2', en: 'Introduction to Programming 2' },
		'BBM103': { tr: 'Programlamaya Giriş Lab 1', en: 'Introduction to Programming Lab 1' },
		'BBM104': { tr: 'Programlamaya Giriş Lab 2', en: 'Introduction to Programming Lab 2' },
		'BBM105': { tr: 'Bilgisayar Mühendisliğine Giriş', en: 'Introduction to Computer Engineering' },
		'FİZ117': { tr: 'Genel Fizik Laboratuvarı', en: 'General Physics Lab' },
		'FİZ137': { tr: 'Fizik 1', en: 'Physics 1' },
		'FİZ138': { tr: 'Fizik 2', en: 'Physics 2' },
		'MAT123': { tr: 'Matematik 1', en: 'Mathematics 1' },
		'MAT124': { tr: 'Matematik 2', en: 'Mathematics 2' },
		'BEB650': { tr: 'Temel Bilgi Teknolojileri Kullanımı', en: 'Basic Information and Communication Technologies' },
		'TKD103': { tr: 'Türk Dili 1', en: 'Turkish 1' },
		'TKD104': { tr: 'Türk Dili 2', en: 'Turkish 2' },
		'BBM201': { tr: 'Veri Yapıları', en: 'Data Structures' },
		'BBM202': { tr: 'Algoritmalar', en: 'Algorithms' },
		'BBM205': { tr: 'Ayrık Matematik', en: 'Discrete Mathematics' },
		'BBM231': { tr: 'Mantıksal Tasarım', en: 'Logic Design' },
		'BBM234': { tr: 'Bilgisayar Organizasyonu', en: 'Computer Organization' },
		'MAT254': { tr: 'Olasılık ve İstatistik', en: 'Probability and Statistics' },
		'ELE299': { tr: 'Mühendislik Etiği', en: 'Engineering Ethics' },
		'İST292': { tr: 'İstatistik', en: 'Statistics' },
		'BBM301': { tr: 'Programlama Dilleri', en: 'Programming Languages' },
		'BBM341': { tr: 'Sistem Programlama', en: 'Systems Programming' },
		'BBM371': { tr: 'Veri Yönetimi ve Dosya Yapıları', en: 'Data Management and File Structures' },
		'BBM402': { tr: 'Hesaplama Teorisi', en: 'Theory of Computation' },
		'BBM406': { tr: 'Makine Öğrenmesinin Temelleri', en: 'Fundamentals of Machine Learning' },
		'BBM408': { tr: 'Algoritma Analizi', en: 'Algorithm Analysis' },
		'BBM410': { tr: 'Dinamik Sistemler', en: 'Dynamic Systems' },
		'BBM412': { tr: 'Bilgisayar Grafikleri', en: 'Computer Graphics' },
		'BBM463': { tr: 'Bilgi Güvenliği', en: 'Information Security' },
		'BBM467': { tr: 'Veri Yoğunluklu Uygulamalar', en: 'Data Intensive Applications' },
		'BBM471': { tr: 'Veri Yönetim Sistemleri', en: 'Data Management Systems' },
		'BBM495': { tr: 'Doğal Dil İşlemeye Giriş', en: 'Introduction to Natural Language Processing' }
	};

	constructor() {
		const savedLang = localStorage.getItem('lang');
		if (savedLang) {
			this.currentLangSubject.next(savedLang);
		}
	}

	setLanguage(lang: string) {
		this.currentLangSubject.next(lang);
		localStorage.setItem('lang', lang);
	}

	translate(key: string): string {
		const lang = this.currentLangSubject.value;
		return this.translations[key] ? this.translations[key][lang as 'tr' | 'en'] : key;
	}

	getCurrentLang(): string {
		return this.currentLangSubject.value;
	}
}
