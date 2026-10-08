import { CommonModule } from '@angular/common';
import { Component, OnInit, AfterViewInit, ElementRef, ViewChild, inject, ChangeDetectorRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-invitation',
  imports: [CommonModule],
  templateUrl: './invitation.html',
  styleUrl: './invitation.scss',
})
export class Invitation implements OnInit, AfterViewInit {
  @ViewChild('audioPlayer') audioPlayer?: ElementRef<HTMLAudioElement>;
  private route = inject(ActivatedRoute);
  private cdr = inject(ChangeDetectorRef);
  private revealObserver?: IntersectionObserver;

  guestName = '';
  guestPasses = '';

  isPlaying = false;
  currentTrack = 0;
  readonly tracks = ['/music/wedding-song.mp3', '/music/wedding-song-2.mp3'];
  readonly photoGallery = [
    '/photos/photo1.jpg',
    '/photos/photo2.jpg',
    '/photos/photo3.jpg',
    '/photos/photo4.jpg',
    '/photos/photo5.jpg',
    '/photos/photo6.jpg',
  ];
  currentPhotoIndex = 0;
  countdown = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00',
  };

  private countdownTimer?: number;
  private carouselTimer?: number;

  invitation = {
    couple: {
      groom: 'Ivan Alejandro',
      bride: 'Etni Belen',
    },
    parents: {
      groom: {
        father: 'Jorge Luis Lujan Cervantes',
        mother: 'Maria de los Angeles de la O Martinez',
      },
      bride: {
        father: 'Lorenzo Salvatierra Lopez',
        mother: 'Leticia Alfaro Zea',
      },
    },
    date: '14 de noviembre de 2026',
    ceremony: {
      title: 'Ceremonia religiosa',
      place: 'Iglesia Cristiana Sion',
      time: '2:00 PM',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Iglesia+Cristiana+Sion',
      address: 'Monterrey, Nuevo León',
    },
    reception: {
      title: 'Recepción',
      place: 'Salón Hotel María Bonita',
      time: '9:00 PM - 4:00 AM',
      mapUrl: 'https://www.google.com/maps/search/?api=1&query=Hotel+Maria+Bonita',
      address: 'Monterrey, Nuevo León',
    },
    itinerary: [
      { label: 'Ceremonia', time: '2:00 PM' },
      { label: 'Recepción', time: '9:00 PM' },
      { label: 'Cena', time: '10:30 PM' },
      { label: 'Fiesta', time: '11:00 PM' },
    ],
  };

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.guestName = params['guest'] || 'Invitado';
      this.guestPasses = params['passes'] || '';
    });
    this.startCountdown();
  }

  get whatsappLink(): string {
    const passesText = this.guestPasses ? ` (Pases: ${this.guestPasses})` : '';
    const message = `¡Hola! Confirmo mi asistencia a la boda. Soy ${this.guestName}${passesText}.`;
    return `https://wa.me/5211234567890?text=${encodeURIComponent(message)}`;
  }

  ngAfterViewInit(): void {
    this.startCarousel();
    this.setupAudio();
    this.setupRevealObserver();
  }

  private setupRevealObserver(): void {
    const revealItems = document.querySelectorAll('.reveal');

    if (!revealItems.length) {
      return;
    }

    this.revealObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.classList.add('is-visible');
          this.revealObserver?.unobserve(entry.target);
        });
      },
      {
        threshold: 0.14,
        rootMargin: '0px 0px -8% 0px',
      },
    );

    revealItems.forEach(item => this.revealObserver?.observe(item));
  }

  private startCountdown(): void {
    this.updateCountdown();
    this.countdownTimer = window.setInterval(() => this.updateCountdown(), 1000);
  }

  private updateCountdown(): void {
    const targetDate = new Date('2026-11-14T14:00:00');
    const difference = targetDate.getTime() - Date.now();

    if (difference <= 0) {
      this.countdown = { days: '00', hours: '00', minutes: '00', seconds: '00' };
      if (this.countdownTimer) {
        window.clearInterval(this.countdownTimer);
      }
      this.cdr.detectChanges();
      return;
    }

    const totalSeconds = Math.floor(difference / 1000);
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    this.countdown = {
      days: String(days).padStart(2, '0'),
      hours: String(hours).padStart(2, '0'),
      minutes: String(minutes).padStart(2, '0'),
      seconds: String(seconds).padStart(2, '0'),
    };
    this.cdr.detectChanges();
  }

  previousPhoto(): void {
    this.currentPhotoIndex =
      (this.currentPhotoIndex - 1 + this.photoGallery.length) % this.photoGallery.length;
    this.restartCarousel();
  }

  nextPhoto(): void {
    this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photoGallery.length;
    this.restartCarousel();
  }

  private startCarousel(): void {
    this.carouselTimer = window.setInterval(() => {
      this.currentPhotoIndex = (this.currentPhotoIndex + 1) % this.photoGallery.length;
    }, 5000);
  }

  private restartCarousel(): void {
    if (this.carouselTimer) {
      window.clearInterval(this.carouselTimer);
    }
    this.startCarousel();
  }

  private setupAudio(): void {
    const audio = this.audioPlayer?.nativeElement;

    if (!audio) {
      return;
    }

    audio.volume = 0.7;
    audio.muted = true;
    audio.loop = false;
    audio.autoplay = true;

    audio.addEventListener('ended', () => {
      this.nextTrack(false);
    });

    window.setTimeout(() => {
      void this.autoplayMusic();
    }, 150);
  }

  private async autoplayMusic(): Promise<void> {
    const audio = this.audioPlayer?.nativeElement;

    if (!audio) {
      return;
    }

    try {
      audio.muted = true;
      await audio.play();
      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  async togglePlayback(): Promise<void> {
    const audio = this.audioPlayer?.nativeElement;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      audio.muted = false;
      await audio.play();
      this.isPlaying = true;
      return;
    }

    audio.pause();
    this.isPlaying = false;
  }

  previousTrack(): void {
    this.currentTrack = (this.currentTrack - 1 + this.tracks.length) % this.tracks.length;
    this.resetAudio();
  }

  nextTrack(autoplay = true): void {
    this.currentTrack = (this.currentTrack + 1) % this.tracks.length;
    this.resetAudio(autoplay);
  }

  private resetAudio(autoplay = true): void {
    const audio = this.audioPlayer?.nativeElement;

    if (!audio) {
      return;
    }

    audio.pause();
    audio.currentTime = 0;
    audio.load();

    if (autoplay) {
      audio.muted = false;
      void audio.play();
      this.isPlaying = true;
      return;
    }

    this.isPlaying = false;
  }
}
