import { CommonModule } from '@angular/common';
import { Component, AfterViewInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="page-shell">
      <div class="invitation-card reveal">
        <div class="hero-content">
          <img
            class="hero-flower hero-flower-left"
            src="/flowers/floral-main.png"
            alt=""
            aria-hidden="true"
          />
          <img
            class="hero-flower hero-flower-right"
            src="/flowers/floral-secondary.png"
            alt=""
            aria-hidden="true"
          />
          <br />
          <br />

          <br />
          <br />

        
            <span class="family-spark" aria-hidden="true">✦</span>
            <p class="invitation-copy">Con la bendición de nuestros padres</p>
            <div class="family-names">
              <div class="family-column">
                <span>{{ invitation.parents.groom.father }}</span>
                <span>{{ invitation.parents.groom.mother }}</span>
              </div>
              <span class="family-divider" aria-hidden="true">✧</span>
              <div class="family-column">
                <span>{{ invitation.parents.bride.father }}</span>
                <span>{{ invitation.parents.bride.mother }}</span>
              </div>
            </div>
        
          <br />

          <p class="eyebrow">Nosotros</p>
          <br />

          <h1 class="couple-names">
            <span>{{ invitation.couple.groom }}</span>
            <span class="ampersand">&amp;</span>
            <span>{{ invitation.couple.bride }}</span>
          </h1>
          <!--  <div class="divider" aria-hidden="true"></div> -->

        
          <p class="invitation-copy">
            Tenemos el honor de invitarte a celebrar nuestra unión en matrimonio
          </p>

         <!-- <div class="divider" aria-hidden="true"></div>-->

       
          <br />

          <div class="date-block">
            <span class="month-label">NOVIEMBRE 14, 2026</span>
          </div>

          <div class="countdown-box">
            <div class="countdown-item">
              <span class="value">{{ countdown.days }}</span>
              <span class="label">Días</span>
            </div>
            <div class="countdown-item">
              <span class="value">{{ countdown.hours }}</span>
              <span class="label">Horas</span>
            </div>
            <div class="countdown-item">
              <span class="value">{{ countdown.minutes }}</span>
              <span class="label">Min</span>
            </div>
            <div class="countdown-item">
              <span class="value">{{ countdown.seconds }}</span>
              <span class="label">Seg</span>
            </div>
          </div>

          <div class="location-label">FALTAN</div>
        </div>
           <audio
            #audioPlayer
            [src]="tracks[currentTrack]"
            preload="auto"
            aria-hidden="true"
          ></audio>

          <div class="music-controls" aria-label="Reproductor de música">
            <span class="music-label">Música</span>
            <div class="music-buttons">
              <button type="button" class="control-button" aria-label="Anterior" (click)="previousTrack()">
                <i class="fa-solid fa-angle-left" aria-hidden="true"></i>
              </button>
              <button type="button" class="control-button play-button" [attr.aria-label]="isPlaying ? 'Pausar música' : 'Reproducir música'" (click)="togglePlayback()">
                <i class="fa-solid" [class.fa-pause]="isPlaying" [class.fa-play]="!isPlaying" aria-hidden="true"></i>
              </button>
              <button type="button" class="control-button" aria-label="Siguiente" (click)="nextTrack()">
                <i class="fa-solid fa-angle-right" aria-hidden="true"></i>
              </button>
            </div>
          </div>
      

      <div class="section-divider reveal">
        <img src="/flowers/floral-secondary.png" alt="" aria-hidden="true" />
      </div>

      <div class="photo-carousel reveal" aria-label="Galería de fotos">
        <div class="photo-slide" *ngFor="let photo of photoGallery; let i = index" [class.active]="i === currentPhotoIndex">
          <img [src]="photo" [alt]="'Foto del evento ' + (i + 1)" />
        </div>

        <div class="photo-overlay">
          <p class="photo-quote">“Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.”</p>
          <span class="photo-reference">- Colosenses 3:14</span>
        </div>

        <div class="photo-controls" aria-label="Controles de galería">
          <button type="button" class="photo-nav" (click)="previousPhoto()" aria-label="Foto anterior">
            <i class="fa-solid fa-chevron-left"></i>
          </button>
          <button type="button" class="photo-nav" (click)="nextPhoto()" aria-label="Siguiente foto">
            <i class="fa-solid fa-chevron-right"></i>
          </button>
        </div>
      </div>

      <div class="event-row">
        <div class="event-column">
          <article class="event-card reveal" style="--event-color: #58789d; text-align: center;">
            <div aria-hidden="true"><i class="fa-solid fa-church" style="color: var(--event-color);"></i></div>
            <p class="event-time">14:00 HRS.</p>
            <h3>CEREMONIA</h3>
            <p class="event-place">IGLESIA CRISTIANA SIÓN</p>
            <p class="event-location">Chihuahua, Chih</p>
            <a class="location-link" [href]="invitation.ceremony.mapUrl" target="_blank" rel="noreferrer">
              <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
              Ver ubicación
            </a>
          </article>
        </div>

        <div class="event-column">
          <article class="event-card reveal" style="--event-color: #c19a6b; text-align: center;">
            <div aria-hidden="true"><i class="fa-solid fa-wine-glass" style="color: var(--event-color);"></i></div>
            <p class="event-time">21:00 HRS.</p>
            <h3>RECEPCIÓN</h3>
            <p class="event-place">SALÓN HOTEL MARÍA BONITA</p>
            <p class="event-location">Chihuahua, Chih</p>
            <a class="location-link" [href]="invitation.reception.mapUrl" target="_blank" rel="noreferrer">
              <i class="fa-solid fa-location-dot" aria-hidden="true"></i>
              Ver ubicación
            </a>
          </article>
        </div>
      </div>

      <div class="section-divider reveal">
        <img src="/flowers/floral-main.png" alt="" aria-hidden="true" />
      </div>

     
        <div class="panel-header">
          <span class="panel-kicker">Agenda</span>
          <h2>ITINERARIO DE ACTIVIDADES</h2>
        

        <div class="timeline itinerary-timeline" aria-label="Itinerario de actividades">
          <div class="timeline-row even-row">
            <div class="timeline-content">
              <div class="event-label">CEREMONÍA</div>
              <div class="event-time">2:00 PM</div>
            </div>
            <div class="timeline-icon" aria-hidden="true"><i class="fa-solid fa-church"></i></div>
          </div>

          <div class="timeline-row odd-row">
            <div class="timeline-icon" aria-hidden="true"><i class="fa-solid fa-cake-candles"></i></div>
            <div class="timeline-content">
              <div class="event-label">RECEPCIÓN</div>
              <div class="event-time">9:00 PM</div>
            </div>
          </div>

          <div class="timeline-row even-row">
            <div class="timeline-content">
              <div class="event-label">CENA</div>
              <div class="event-time">10:30 PM</div>
            </div>
            <div class="timeline-icon" aria-hidden="true"><i class="fa-solid fa-utensils"></i></div>
          </div>

          <div class="timeline-row odd-row last-row">
            <div class="timeline-icon" aria-hidden="true"><i class="fa-solid fa-music"></i></div>
            <div class="timeline-content">
              <div class="event-label">FIESTA</div>
              <div class="event-time">11:00 PM</div>
            </div>
          </div>
        </div>

        <div class="story-photo venue-photo photo-static-card" aria-label="Foto del salón">
          <img src="https://cdn2.paraty.es/mariabonita-corpo/images/e0fdf792a4c839f=s1600?v=20260922" alt="Salón Hotel Maria Bonita" />
          <div class="photo-overlay photo-overlay-static">
            <p class="photo-quote">“Y sobre todas estas cosas vestíos de amor, que es el vínculo perfecto.”</p>
            <span class="photo-reference">- Colosenses 3:14</span>
          </div>
        </div>
     
      

      <div class="section-divider reveal">
        <img src="/flowers/floral-secondary.png" alt="" aria-hidden="true" />
      </div>

     
        <div class="panel-header center">
          <span class="panel-kicker">Detalles</span>
          <h2>INFORMACIÓN IMPORTANTE</h2>
        </div>

        <div class="info-grid">
          <div class="info-block">
            <div class="info-badge" aria-hidden="true"><i class="fa-solid fa-shirt"></i></div>
            <h3>CÓDIGO DE VESTIMENTA</h3>
            <p class="info-note">Etiqueta</p>
            <div class="couple-silhouette" aria-hidden="true">
              <span class="silhouette groom"></span>
              <span class="silhouette bride"></span>
            </div>
            <p class="dress-line">Damas: Vestido largo (no blanco)</p>
            <p class="dress-line">Caballeros: Traje formal</p>
          </div>

          <div class="info-block">
            <div class="info-badge" aria-hidden="true"><i class="fa-solid fa-gift"></i></div>
            <h3>SUGERENCIA DE REGALOS</h3>
            <p class="gift-text">El mejor regalo es tu presencia, pero si deseas tener un detalle con nosotros, te dejamos estas opciones.</p>
            <p class="gift-subtitle">LLEVAN DE SOBRES</p>
          </div>

          <div class="info-block">
            <div class="info-badge" aria-hidden="true"><i class="fa-solid fa-building-columns"></i></div>
            <h3>TRANSFERENCIA</h3>
            <p class="transfer-line">Cuenta: AAABBBBCCCC</p>
            <p class="transfer-line">Rut: XXXXXXXX</p>
            <p class="transfer-line">Banco: BBVA</p>
          </div>

          <div class="info-block">
            <div class="info-badge" aria-hidden="true"><i class="fa-solid fa-calendar-check"></i></div>
            <h3>CONFIRMAR ASISTENCIA</h3>
            <p class="rsvp-copy">Agradecemos que confirms tu asistencia antes del 20 de Agosto.</p>
            <button type="button" class="cta-button"><i class="fa-solid fa-envelope"></i> Contacta nosotrxs</button>
            <button type="button" class="cta-button secondary"><i class="fa-solid fa-phone"></i> Contacta a nosotros</button>
          </div>
        </div>
      <div class="section-divider reveal">
        <img src="/flowers/floral-main.png" alt="" aria-hidden="true" />
      </div>

        <div class="thank-you reveal">
 
          <p class="thank-you-kicker">Con cariño</p>
          <h3>Gracias por acompañarnos</h3>
          <p>Tu presencia será el mejor regalo y hará que este día sea aún más especial.</p>
          <div class="thank-you-badges" aria-label="Mensajes finales">
            <span><i class="fa-solid fa-heart"></i> Amor</span>
            <span><i class="fa-solid fa-star"></i> Felicidad</span>
            <span><i class="fa-solid fa-sparkles"></i> Celebración</span>
          </div>
        </div>
     
    </div>
    </div>
  `,
  styles: `
    :host {
      --paper: #f7f3ee;
      --paper-strong: #efe6df;
      --paper-deep: #e7e0d7;
      --ink: #445864;
      --ink-soft: #687d8a;
      --muted: #798d9b;
      --line: rgba(92, 108, 120, 0.18);
      --shadow: 0 20px 46px rgba(66, 77, 86, 0.09);
      --accent: #7b8ea4;
      --accent-soft: #c4d0d8;
      --gold: #b9a48d;
      display: block;
      min-height: 100vh;
      background:
        radial-gradient(circle at top, rgba(194, 208, 220, 0.28), transparent 26%),
        linear-gradient(180deg, #eef1f0 0%, #f4efe9 42%, #f8f3ef 100%);
      color: var(--ink);
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    * { box-sizing: border-box; }
    img { max-width: 100%; display: block; }
    a { color: inherit; }
    button { font: inherit; }

    .page-shell {
      position: relative;
      min-height: 100vh;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      gap: 22px;
      padding: 56px 18px 80px;
      overflow: hidden;
    }

    .page-shell::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.22), rgba(255,255,255,0.02)),
        radial-gradient(circle at 12% 18%, rgba(171, 187, 202, 0.12), transparent 22%),
        radial-gradient(circle at 84% 68%, rgba(171, 187, 202, 0.08), transparent 24%),
        repeating-linear-gradient(
          0deg,
          rgba(100, 110, 120, 0.015),
          rgba(100, 110, 120, 0.015) 1px,
          transparent 1px,
          transparent 4px
        );
      pointer-events: none;
    }

    .invitation-card,
    .story-panel,
    .section-divider {
      position: relative;
      z-index: 1;
      width: min(100%, 980px);
    }

    .invitation-card,
    .story-panel {
      border: 1px solid rgba(112, 125, 136, 0.14);
      background:
        linear-gradient(180deg, rgba(255,255,255,0.15), rgba(245,240,234,0.82)),
        var(--paper);
      box-shadow: 0 14px 34px rgba(81, 94, 106, 0.07);
      border-radius: 24px;
    }

    .invitation-card {
      padding: 56px 34px 40px;
      overflow: hidden;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.17), rgba(245,240,234,0.82)),
        var(--paper);
    }

    .invitation-card::before {
      content: '';
      position: absolute;
      inset: -26px -10% auto -10%;
      height: 280px;
      background: url('/assets/%E2%80%94Pngtree%E2%80%94stylish%20ripped%20torn%20paper%20texture_8797801.png') center top / cover no-repeat;
      opacity: 0.18;
      filter: sepia(0.2) saturate(0.5) brightness(1.1);
      pointer-events: none;
      z-index: 0;
      transform: rotate(2deg);
    }

    .invitation-card::after {
      content: '';
      position: absolute;
      right: 12px;
      top: 10px;
      width: 170px;
      height: 170px;
      background: url('/assets/Charming-Dusty-Blue-Floral-Design-PNG-thumb.png') center / contain no-repeat;
      opacity: 0.55;
      filter: hue-rotate(185deg) saturate(0.8) brightness(1.1);
      pointer-events: none;
      z-index: 0;
      transform: rotate(8deg);
    }

    .hero-content {
      position: relative;
      display: flex;
      flex-direction: column;
      align-items: center;
      text-align: center;
      color: var(--ink);
      padding: 12px 8px 6px;
      z-index: 1;
    }

    .hero-content::before {
      content: '';
      position: absolute;
      inset: 12% 18% 18%;
      border: 1px solid rgba(122, 141, 161, 0.08);
      border-radius: 50%;
      pointer-events: none;
      z-index: 0;
      box-shadow: inset 0 0 0 8px rgba(255,255,255,0.08);
    }

    .hero-flower {
      position: absolute;
      top: 10px;
      width: min(30vw, 300px);
      opacity: 0.9;
      user-select: none;
      pointer-events: none;
      filter: drop-shadow(0 15px 30px rgba(84, 97, 112, 0.12));
      z-index: 0;
    }

    .hero-flower-left {
      left: -40px;
      transform: rotate(-8deg);
    }

    .hero-flower-right {
      right: -34px;
      transform: scaleX(-1) rotate(7deg);
    }

    .eyebrow {
      margin: 0;
      font-size: 0.72rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: rgba(90, 105, 116, 0.8);
      font-weight: 700;
    }

    .invitation-copy {
      max-width: 720px;
      margin: 30px auto 0;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(1rem, 1.8vw, 1.35rem);
      line-height: 1.8;
      letter-spacing: 0.04em;
      color: rgba(76, 91, 100, 0.8);
      font-weight: 500;
      font-style: italic;
    }

    .couple-names {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 22px;
      flex-wrap: wrap;
      margin: 18px auto 10px;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(3.2rem, 6vw, 6.8rem);
      line-height: 0.9;
      font-weight: 500;
      font-style: italic;
      color: var(--ink);
      text-shadow: 0 1px 0 rgba(255,255,255,0.6);
    }

    .ampersand {
      font-size: clamp(2.4rem, 4vw, 4rem);
      opacity: 0.7;
      color: var(--gold);
    }

    .invitation-text {
      max-width: 560px;
      margin: 0 auto;
      font-size: 1.08rem;
      line-height: 1.7;
      color: rgba(41, 60, 73, 0.8);
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
    }

    .family-banner {
      position: relative;
      width: min(100%, 700px);
      margin: 8px auto 22px;
      padding: 18px 18px 16px;
      border: 1px solid rgba(110, 124, 134, 0.12);
      border-radius: 18px;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.14), rgba(232, 224, 214, 0.2)),
        rgba(255,255,255,0.04);
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.32);
      overflow: hidden;
      z-index: 1;
    }

    .family-banner::before,
    .family-banner::after {
      content: '';
      position: absolute;
      top: 50%;
      width: 18%;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(94, 112, 128, 0.35), transparent);
      transform: translateY(-50%);
    }

    .family-banner::before {
      left: 8%;
    }

    .family-banner::after {
      right: 8%;
    }

    .family-spark {
      display: grid;
      place-items: center;
      width: 28px;
      height: 28px;
      margin: 0 auto 12px;
      border-radius: 50%;
      background: rgba(153, 173, 191, 0.16);
      border: 1px solid rgba(94, 112, 128, 0.16);
      color: rgba(92, 108, 120, 0.86);
      font-size: 0.7rem;
      box-shadow: 0 0 0 6px rgba(156, 178, 196, 0.08);
    }

    .family-label {
      margin: 0 0 18px;
      text-align: center;
      font-size: 0.68rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(74, 89, 99, 0.74);
      font-weight: 700;
    }

    .family-names {
      display: grid;
      grid-template-columns: minmax(0, 1fr) auto minmax(0, 1fr);
      align-items: center;
      gap: 14px;
      text-align: center;
      margin-bottom: 8px;
    }

    .family-column {
      display: flex;
      flex-direction: column;
      gap: 4px;
      min-width: 0;
      font-size: 0.66rem;
      line-height: 1.6;
      letter-spacing: 0.06em;
      color: rgba(48, 62, 76, 0.82);
      font-weight: 600;
      text-transform: uppercase;
    }

    .family-column span:first-child {
      font-weight: 700;
    }

    .family-divider {
      display: grid;
      place-items: center;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.3);
      border: 1px solid rgba(94, 112, 128, 0.16);
      color: rgba(92, 108, 120, 0.84);
      font-size: 0.72rem;
    }

    .divider {
      width: 200px;
      height: 1px;
      margin: 18px auto 12px;
      background: rgba(78, 95, 112, 0.22);
    }

    .music-controls {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 14px;
      width: fit-content;
      margin: 20px auto 18px;
      padding: 8px 14px 8px 12px;
      border-radius: 999px;
      border: none;
      background: rgba(255, 255, 255, 0.16);
      box-shadow: none;
      backdrop-filter: blur(2px);
    }

    .music-label {
      font-size: 0.62rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: rgba(52, 65, 79, 0.7);
      font-weight: 700;
    }

    .music-buttons {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    .control-button {
      width: 34px;
      height: 34px;
      border-radius: 50%;
      border: 1px solid rgba(92, 108, 122, 0.14);
      background: rgba(255,255,255,0.16);
      color: var(--ink);
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: transform 0.2s ease, background 0.2s ease, box-shadow 0.2s ease;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.35);
    }

    .control-button i {
      font-size: 0.8rem;
      line-height: 1;
      opacity: 0.85;
    }

    .control-button:hover {
      transform: translateY(-1px);
      background: rgba(255,255,255,0.38);
      box-shadow: 0 8px 18px rgba(76, 90, 103, 0.08);
    }

    .play-button {
      width: 44px;
      height: 44px;
      font-size: 1.12rem;
      background: rgba(126, 143, 163, 0.14);
      border-color: rgba(85, 101, 116, 0.2);
      color: #4f6173;
    }

    .play-button i {
      font-size: 0.96rem;
    }

    .date-block {
    font-size: 1.25rem;
      margin-top: 8px;
      text-align: center;
    }

    .date-header {
      display: inline-flex;
      flex-direction: column;
      align-items: center;
      gap: 6px;
      font-family: Georgia, 'Times New Roman', serif;
    }

    .month-label {
      display: inline-block;
      font-size: clamp(1rem, 2vw, 1.55rem);
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(45, 60, 73, 0.72);
      font-weight: 700;
      font-family: Georgia, 'Times New Roman', serif;
    }

    .date-value-wrap {
      display: flex;
      align-items: baseline;
      justify-content: center;
      gap: 10px;
    }

    .date-number {
      font-size: clamp(2.5rem, 5vw, 4.4rem);
      line-height: 1;
      font-weight: 500;
    }

    .year-label {
      font-size: 0.9rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
    }

    .countdown-box {
      width: min(100%, 440px);
      margin: 20px auto 0;
      display: grid;
      grid-template-columns: repeat(4, minmax(0, 1fr));
      gap: 10px;
    }

    .countdown-item {
      text-align: center;
    }

    .countdown-item .value {
      display: block;
      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(1.7rem, 4vw, 2.8rem);
      line-height: 1;
      font-weight: 500;
    }

    .countdown-item .label {
      display: block;
      margin-top: 7px;
      font-size: 0.62rem;
      letter-spacing: 0.18em;
      text-transform: uppercase;
      color: rgba(52, 66, 79, 0.72);
    }

    .location-label {
      margin-top: 16px;
      font-size: 0.8rem;
      letter-spacing: 0.28em;
      text-transform: uppercase;
      color: rgba(48, 62, 75, 0.72);
      text-align: center;
    }

    .section-divider {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 8px 0 2px;
      opacity: 0.96;
    }

    .section-divider::before,
    .section-divider::after {
      content: '';
      flex: 1;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(98, 116, 132, 0.26), transparent);
    }

    .section-divider img {
      width: min(56vw, 420px);
      opacity: 0.9;
      filter: drop-shadow(0 10px 18px rgba(64, 81, 97, 0.08));
      margin: 0 18px;
    }

    .story-panel {
      padding: 30px 28px 36px;
      display: grid;
      gap: 28px;
      overflow: hidden;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.16), rgba(244,236,228,0.76)),
        var(--paper);
    }

    .story-panel::before {
      content: '';
      position: absolute;
      inset: 18px 18px auto auto;
      width: 100%;
      height: auto;
      border-radius: 50%;
      background: radial-gradient(circle, rgba(170, 188, 204, 0.2), transparent 68%);
      pointer-events: none;
    }

    .story-visual,
    .story-photo {
      overflow: hidden;
      --border-radius: 22px;
      --border: 1px solid var(--line);
      --background: #edf2f4;
    }

    .story-visual img,
    .story-photo img {
      width: 100%;
      object-fit: auto;
      object-position: center top;
      display: block;
    }

    .photo-carousel {
      position: relative;
      width: 100%;
      height: clamp(320px, 42vw, 430px);
      overflow: hidden;
      border-radius: 22px;
      border: 1px solid rgba(111, 127, 141, 0.14);
      background: #edf2f4;
      box-shadow: 0 16px 30px rgba(74, 88, 101, 0.08);
    }

    .photo-slide {
      position: absolute;
      inset: 0;
      opacity: 0;
      transition: opacity 0.7s ease;
      pointer-events: none;
    }

    .photo-slide.active {
      opacity: 1;
    }

    .photo-slide img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center;
      display: block;
    }

    .photo-overlay {
      position: absolute;
      left: 18px;
      right: 110px;
      bottom: 18px;
      z-index: 2;
      padding: 12px 14px 10px;
      border-radius: 16px;
      background: rgba(28, 39, 48, 0.25);
      border: 1px solid rgba(255, 255, 255, 0.18);
      backdrop-filter: blur(4px);
      box-shadow: 0 12px 18px rgba(22, 30, 38, 0.12);
    }

    .photo-quote {
      margin: 0;
      color: rgba(255,255,255,0.92);
      font-family: Georgia, 'Times New Roman', serif;
      font-size: clamp(0.72rem, 1.1vw, 1rem);
      line-height: 1.5;
      font-style: italic;
      letter-spacing: 0.02em;
      text-wrap: pretty;
    }

    .photo-reference {
      display: block;
      margin-top: 4px;
      color: rgba(255,255,255,0.82);
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .photo-controls {
      position: absolute;
      right: 18px;
      bottom: 20px;
      z-index: 3;
      display: flex;
      gap: 10px;
    }

    .photo-nav {
      width: 36px;
      height: 36px;
      border: 1px solid rgba(255,255,255,0.28);
      border-radius: 50%;
      background: rgba(16, 28, 38, 0.28);
      color: rgba(255,255,255,0.96);
      display: grid;
      place-items: center;
      cursor: pointer;
      transition: transform 0.2s ease, background 0.2s ease;
      backdrop-filter: blur(3px);
    }

    .photo-nav:hover {
      transform: translateY(-1px);
      background: rgba(16, 28, 38, 0.42);
    }

    .photo-nav i {
      font-size: 0.8rem;
    }

    .photo-static-card {
      position: relative;
      overflow: hidden;
      border-radius: 22px;
      border: 1px solid rgba(111, 127, 141, 0.14);
      background: #edf2f4;
      box-shadow: 0 16px 30px rgba(74, 88, 101, 0.08);
      width: min(100%, 720px);
      margin: 18px auto 0;
      height: clamp(320px, 42vw, 430px);
    }

    .photo-static-card img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      display: block;
    }

    .photo-overlay-static {
      left: 18px;
      right: 18px;
      bottom: 18px;
      max-width: min(82%, 480px);
    }

    .venue-photo {
      width: min(100%, 720px);
      margin: 18px auto 0;
      border-radius: 24px;
    }

    .story-details {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 22px;
      width: min(100%, 760px);
      margin: 0 auto;
    }

    .event-row {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 22px;
      width: min(100%, 760px);
      margin: 0 auto;
      position: relative;
      z-index: 1;
    }

    .event-column {
      min-width: 0;
    }

    .event-card {
      position: relative;
      align-self: center;
      padding: 28px 18px 20px;
      text-align: center;
      --border: 1px solid rgba(123, 141, 162, 0.15);
      --border-radius: 22px;
      --background:
      --  linear-gradient(180deg, rgba(255,255,255,0.1), rgba(226,235,242,0.32)),
      --  linear-gradient(135deg, rgba(142, 163, 186, 0.12), rgba(247,243,238,0.2));
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.24);
      overflow: hidden;
      height: 100%;
    }

    @media (max-width: 700px) {
      .event-row {
        grid-template-columns: 1fr;
      }
    }

    .event-card::before {
      content: '';
      position: absolute;
      inset: 10px 12px auto auto;
      width: 80px;
      height: 80px;
      background: url('/assets/Charming-Dusty-Blue-Floral-Design-PNG-thumb.png') center / contain no-repeat;
      opacity: 0.32;
      filter: hue-rotate(185deg) saturate(0.7) brightness(1.12);
      pointer-events: none;
      transform: rotate(8deg);
    }

    .event-icon {
      width: 44px;
      height: 44px;
      border-radius: 12px;
      margin: 0 auto 12px;
      display: grid;
      place-items: center;
      background: rgba(112, 136, 166, 0.08);
      border: 1px solid rgba(98, 118, 137, 0.12);
      color: #4b6c8c;
      font-size: 3rem;
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.24);
    }

    .event-icon i {
      line-height: 1;
      opacity: 0.9;
    }

    .event-time {
      margin: 0;
      font-size: 0.75rem;
      letter-spacing: 0.15em;
      text-transform: uppercase;
      color: rgba(46, 61, 75, 0.74);
      font-weight: 700;
    }

    .event-card h3 {
      margin: 12px 0 8px;
      font-size: 1.12rem;
      letter-spacing: 0.16em;
      text-transform: uppercase;
      font-weight: 800;
    }

    .event-place {
      margin: 0;
      font-size: 0.72rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      color: rgba(52, 68, 81, 0.8);
      line-height: 1.55;
      font-weight: 700;
    }

    .event-location {
      margin: 10px 0 0;
      font-size: 0.82rem;
      color: rgba(52, 68, 81, 0.76);
      font-style: italic;
    }

    .location-link,
    .cta-button {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      gap: 8px;
      width: fit-content;
      margin: 14px auto 0;
      border: 1px solid rgba(107, 128, 151, 0.18);
      border-radius: 999px;
      background: linear-gradient(180deg, rgba(126, 149, 173, 0.82), rgba(103, 128, 150, 0.86));
      color: #f8f5f1;
      padding: 9px 16px;
      font-size: 0.68rem;
      letter-spacing: 0.12em;
      text-transform: uppercase;
      cursor: pointer;
      box-shadow: 0 8px 16px rgba(87, 104, 122, 0.14);
      text-decoration: none;
      transition: transform 0.2s ease, box-shadow 0.2s ease, filter 0.2s ease;
    }

    .location-link {
      border: none;
      background: linear-gradient(180deg, rgba(122, 145, 172, 0.9), rgba(98, 120, 142, 0.86));
      box-shadow: none;
      padding: 10px 14px;
      color: #f8f5f1;
    }

    .location-link:hover,
    .cta-button:hover {
      transform: translateY(-1px);
      box-shadow: 0 12px 16px rgba(87, 104, 122, 0.18);
      filter: brightness(1.02);
    }

    .panel-header {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 8px;
      margin-bottom: 8px;
    }

    .panel-header.center {
      align-items: center;
      text-align: center;
    }

    .panel-kicker {
      display: inline-block;
      font-size: 0.7rem;
      letter-spacing: 0.22em;
      text-transform: uppercase;
      color: rgba(71, 88, 101, 0.7);
      font-weight: 700;
    }

    .panel-header h2 {
      margin: 0;
      font-size: clamp(1.2rem, 2vw, 1.8rem);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 800;
    }

    .timeline {
      position: relative;
      width: min(100%, 460px);
      margin: 0 auto;
      display: flex;
      flex-direction: column;
      gap: 14px;
    }

    .itinerary-timeline {
      padding: 10px 0 6px 6px;
    }

    .timeline-row {
      position: relative;
      display: grid;
      grid-template-columns: minmax(0, 1fr) 58px;
      align-items: center;
      min-height: 70px;
      width: 100%;
      gap: 14px;
    }

    .timeline-row.odd-row {
      grid-template-columns: 58px minmax(0, 1fr);
    }

    .timeline-row.even-row .timeline-content {
      text-align: right;
      align-items: flex-end;
      padding-right: 8px;
    }

    .timeline-row.odd-row .timeline-content {
      text-align: left;
      align-items: flex-start;
      padding-left: 8px;
    }

    .timeline-row:not(:last-child)::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 54px;
      width: 2px;
      height: 26px;
      transform: translateX(-50%);
      background: rgba(98, 116, 132, 0.35);
    }

    .timeline-row.last-row {
      min-height: 52px;
    }

    .timeline-icon {
      position: relative;
      display: grid;
      place-items: center;
      width: 52px;
      height: 52px;
      border-radius: 50%;
      background: linear-gradient(180deg, rgba(131, 154, 179, 0.18), rgba(255,255,255,0.7));
      border: 1px solid rgba(94, 116, 133, 0.3);
      box-shadow: 0 0 0 6px rgba(163, 181, 201, 0.16);
      color: #687f96;
      font-size: 1.15rem;
      z-index: 1;
      justify-self: center;
    }

    .timeline-icon i {
      font-size: 0.95rem;
    }

    .timeline-content {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      min-width: 0;
    }

    .event-label,
    .event-time {
      font-family: Georgia, 'Times New Roman', serif;
      color: var(--ink);
      font-weight: 700;
      letter-spacing: 0.12em;
      text-transform: uppercase;
    }

    .event-label {
      font-size: 0.82rem;
    }

    .event-time {
      margin-top: 3px;
      font-size: 0.92rem;
      letter-spacing: 0.08em;
    }

    .info-grid {
      display: grid;
      grid-template-columns: repeat(2, minmax(0, 1fr));
      gap: 22px;
      width: min(100%, 760px);
      margin: 0 auto;
    }

    .info-block {
      position: relative;
      padding: 22px 18px 18px;
      border: 1px solid rgba(125, 143, 161, 0.12);
      border-radius: 20px;
      text-align: center;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.13), rgba(222,231,238,0.2)),
        linear-gradient(135deg, rgba(124, 147, 170, 0.08), rgba(247,243,238,0.18));
      box-shadow: inset 0 1px 0 rgba(255,255,255,0.22);
      overflow: hidden;
    }

    .info-block::before {
      content: '';
      position: absolute;
      inset: 8px auto auto 12px;
      width: 70px;
      height: 70px;
      background: url('/assets/Charming-Dusty-Blue-Floral-Design-PNG-thumb.png') center / contain no-repeat;
      opacity: 0.18;
      filter: hue-rotate(185deg) saturate(0.8) brightness(1.08);
      pointer-events: none;
    }

    .info-badge {
      width: 42px;
      height: 42px;
      margin: 0 auto 12px;
      display: grid;
      place-items: center;
      border-radius: 50%;
      background: rgba(142, 164, 186, 0.12);
      border: 1px solid rgba(88, 112, 132, 0.18);
      color: #61798d;
    }

    .info-badge i {
      font-size: 1rem;
    }

    .info-block h3 {
      margin: 0 0 8px;
      font-size: clamp(1rem, 2vw, 1.5rem);
      letter-spacing: 0.08em;
      text-transform: uppercase;
      font-weight: 800;
      font-family: Georgia, 'Times New Roman', serif;
    }

    .info-note {
      margin: 0 0 12px;
      color: rgba(46, 59, 72, 0.82);
      font-style: italic;
      font-family: Georgia, 'Times New Roman', serif;
    }

    .couple-silhouette {
      position: relative;
      width: 120px;
      height: 96px;
      margin: 0 auto 12px;
    }

    .silhouette {
      position: absolute;
      bottom: 0;
      width: 44px;
      height: 58px;
      border-radius: 50% 50% 26% 26%;
      background: rgba(41, 58, 71, 0.86);
    }

    .silhouette::before {
      content: '';
      position: absolute;
      width: 18px;
      height: 18px;
      left: 13px;
      top: -15px;
      border-radius: 50%;
      background: rgba(41, 58, 71, 0.86);
    }

    .silhouette.groom {
      left: 12px;
    }

    .silhouette.bride {
      right: 12px;
    }

    .dress-line,
    .gift-text,
    .transfer-line,
    .rsvp-copy {
      margin: 0;
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
      line-height: 1.7;
      color: rgba(43, 58, 71, 0.8);
    }

    .gift-icon {
      position: relative;
      width: 58px;
      height: 54px;
      margin: 2px auto 10px;
    }

    .gift-box {
      position: absolute;
      left: 10px;
      right: 10px;
      bottom: 0;
      height: 30px;
      border-radius: 5px;
      background: rgba(87, 110, 130, 0.12);
      border: 2px solid rgba(61, 82, 99, 0.7);
    }

    .gift-box::before,
    .gift-box::after {
      content: '';
      position: absolute;
      background: rgba(61, 82, 99, 0.7);
    }

    .gift-box::before {
      left: 50%;
      top: -8px;
      width: 2px;
      height: 36px;
      transform: translateX(-50%);
    }

    .gift-box::after {
      left: -2px;
      right: -2px;
      top: 50%;
      height: 2px;
      transform: translateY(-50%);
    }

    .gift-lid {
      position: absolute;
      left: 6px;
      right: 6px;
      top: 8px;
      height: 12px;
      border-radius: 4px 4px 0 0;
      border: 2px solid rgba(61, 82, 99, 0.7);
      border-bottom: none;
      background: rgba(255,255,255,0.14);
    }

    .gift-subtitle {
      margin-top: 12px;
      font-size: 0.8rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      font-weight: 700;
      color: var(--ink);
    }

    .transfer-line {
      font-style: normal;
      font-size: 0.95rem;
    }

    .calendar-icon {
      position: relative;
      width: 56px;
      height: 56px;
      margin: 0 auto 10px;
      border: 2px solid rgba(56, 74, 86, 0.7);
      border-radius: 8px;
      background: rgba(255,255,255,0.18);
    }

    .calendar-top {
      position: absolute;
      left: 8px;
      right: 8px;
      top: -8px;
      height: 12px;
      border-radius: 4px 4px 0 0;
      background: rgba(56, 74, 86, 0.72);
    }

    .calendar-ring {
      position: absolute;
      left: 50%;
      top: 50%;
      width: 22px;
      height: 22px;
      transform: translate(-50%, -50%);
      border: 2px solid rgba(56, 74, 86, 0.7);
      border-radius: 50%;
    }

    .cta-button {
      margin-top: 18px;
      min-width: 200px;
    }

    .cta-button i {
      font-size: 0.74rem;
    }

    .cta-button.secondary {
      margin-top: 10px;
      background: linear-gradient(180deg, #f5f8fa 0%, #e3ebf1 100%);
    }

    .thank-you {
      position: relative;
      margin: 30px auto 8px;
      padding: 30px 20px 22px;
      text-align: center;
      border-radius: 20px;
      border: 1px solid rgba(114, 128, 141, 0.14);
      background: linear-gradient(180deg, rgba(255,255,255,0.12), rgba(235,228,219,0.2));
      overflow: hidden;
    }

    .thank-you::before {
      content: '';
      position: absolute;
      inset: 14px 14px auto auto;
      width: 120px;
      height: 120px;
      background: radial-gradient(circle, rgba(132, 155, 176, 0.12), transparent 68%);
      pointer-events: none;
      border-radius: 50%;
    }

    .thank-you-floral {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      opacity: 0.9;
    }

    .thank-you-floral img {
      width: min(42vw, 250px);
      filter: drop-shadow(0 12px 18px rgba(77, 92, 107, 0.1));
    }

    .thank-you-kicker {
      margin: 0 0 8px;
      font-size: 0.7rem;
      letter-spacing: 0.24em;
      text-transform: uppercase;
      color: rgba(72, 86, 98, 0.72);
      font-weight: 700;
    }

    .thank-you h3 {
      margin: 0 0 10px;
      font-size: clamp(1.8rem, 4vw, 3rem);
      line-height: 1.1;
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
      font-weight: 500;
      color: var(--ink);
    }

    .thank-you p {
      max-width: 540px;
      margin: 0 auto;
      font-size: 1rem;
      line-height: 1.7;
      color: rgba(43, 57, 69, 0.78);
      font-family: Georgia, 'Times New Roman', serif;
      font-style: italic;
    }

    .thank-you-badges {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 10px;
      margin-top: 16px;
    }

    .thank-you-badges span {
      display: inline-flex;
      align-items: center;
      gap: 7px;
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(255,255,255,0.16);
      border: 1px solid rgba(91, 108, 120, 0.12);
      font-size: 0.7rem;
      letter-spacing: 0.14em;
      text-transform: uppercase;
      color: var(--ink);
    }

    .reveal {
      opacity: 0;
      filter: blur(5px);
      transform: translate3d(0, 28px, 0) scale(0.985);
      clip-path: inset(0 0 10% 0 round 18px);
      transform-origin: center bottom;
      will-change: opacity, transform, filter, clip-path;
      transition:
        opacity 0.9s cubic-bezier(0.22, 1, 0.36, 1),
        transform 0.9s cubic-bezier(0.22, 1, 0.36, 1),
        filter 0.8s ease,
        clip-path 0.9s cubic-bezier(0.22, 1, 0.36, 1);
    }

    .reveal.is-visible {
      opacity: 1;
      filter: blur(0);
      transform: translate3d(0, 0, 0) scale(1);
      clip-path: inset(0 0 0 0 round 18px);
    }

    .section-divider.reveal,
    .story-visual.reveal,
    .story-photo.reveal,
    .event-card.reveal,
    .info-block.reveal,
    .thank-you.reveal,
    .music-controls.reveal {
      transform: translate3d(0, 26px, 0) scale(0.986);
      clip-path: inset(0 0 12% 0 round 18px);
    }

    .section-divider.reveal.is-visible,
    .story-visual.reveal.is-visible,
    .story-photo.reveal.is-visible,
    .event-card.reveal.is-visible,
    .info-block.reveal.is-visible,
    .thank-you.reveal.is-visible,
    .music-controls.reveal.is-visible {
      transform: translate3d(0, 0, 0) scale(1);
      clip-path: inset(0 0 0 0 round 18px);
    }

    .reveal:nth-of-type(2n) {
      transition-delay: 120ms;
    }

    .reveal:nth-of-type(3n) {
      transition-delay: 180ms;
    }

    @media (min-width: 960px) {
      .story-panel {
        padding: 34px 34px 38px;
      }
    }

    @media (max-width: 760px) {
      .story-details,
      .info-grid {
        grid-template-columns: 1fr;
      }

      .story-visual img,
      .story-photo img {
        height: 300px;
      }
    }

    @media (max-width: 520px) {
      .page-shell {
        padding-left: 12px;
        padding-right: 12px;
      }

      .invitation-card {
        padding-left: 18px;
        padding-right: 18px;
      }

      .story-panel {
        padding-left: 16px;
        padding-right: 16px;
      }

      .family-banner {
        padding-inline: 12px;
      }

      .family-names {
        gap: 10px;
      }

      .family-block {
        min-width: 0;
        font-size: 0.62rem;
      }

      .hero-flower {
        width: min(46vw, 220px);
      }

      .hero-flower-left {
        left: -16px;
      }

      .hero-flower-right {
        right: -16px;
      }

      .couple-names {
        gap: 10px;
      }

      .countdown-box {
        gap: 8px;
      }
    }
  `,
})
export class App implements AfterViewInit {
  @ViewChild('audioPlayer') audioPlayer?: ElementRef<HTMLAudioElement>;

  isPlaying = false;
  currentTrack = 0;
  readonly tracks = ['/music/wedding-song.mp3', '/music/wedding-song-2.mp3'];
  readonly photoGallery = [
    '/photo1.jpg',
    '/photo2.jpg',
    '/photo3.jpg',
    '/photo4.jpg',
    '/photo5.jpg',
    '/photo6.jpg',
  ];
  currentPhotoIndex = 0;
  countdown = {
    days: '00',
    hours: '00',
    minutes: '00',
    seconds: '00'
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

  ngAfterViewInit(): void {
    const revealItems = document.querySelectorAll('.reveal');

    if (!('IntersectionObserver' in window)) {
      revealItems.forEach((item) => item.classList.add('is-visible'));
    } else {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible');
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.15 }
      );

      revealItems.forEach((item) => observer.observe(item));
    }

    this.startCountdown();
    this.startCarousel();
    this.setupAudio();
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
    audio.loop = false;

    audio.addEventListener('ended', () => {
      this.nextTrack(false);
    });

    void this.autoplayMusic();
  }

  private async autoplayMusic(): Promise<void> {
    const audio = this.audioPlayer?.nativeElement;

    if (!audio) {
      return;
    }

    try {
      audio.muted = false;
      await audio.play();
      this.isPlaying = true;
    } catch {
      this.isPlaying = false;
    }
  }

  togglePlayback(): void {
    const audio = this.audioPlayer?.nativeElement;

    if (!audio) {
      return;
    }

    if (audio.paused) {
      void audio.play();
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
      void audio.play();
      this.isPlaying = true;
      return;
    }

    this.isPlaying = false;
  }
}
