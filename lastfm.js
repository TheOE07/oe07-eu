const lastfmWidget = document.getElementById('lastfm-widget');
const lastfmUser = 'oe07';
const lastfmApiKey = '3f7879f1ab8dab63f322d66416397c2f';

async function loadLastFmTrack() {
    if (!lastfmWidget) {
        return;
    }

    const endpoint = new URL('https://ws.audioscrobbler.com/2.0/');
    endpoint.search = new URLSearchParams({
        method: 'user.getrecenttracks',
        user: lastfmUser,
        api_key: lastfmApiKey,
        format: 'json',
        limit: '1',
    }).toString();

    try {
        const response = await fetch(endpoint);
        if (!response.ok) {
            throw new Error('Last.fm request failed');
        }

        const data = await response.json();
        const track = data?.recenttracks?.track?.[0];

        if (!track) {
            lastfmWidget.textContent = 'no recent track found';
            return;
        }

        const artist = track.artist?.['#text'] || 'unknown artist';
        const title = track.name || 'unknown track';
        const nowPlaying = track['@attr']?.nowplaying === 'true';
        const link = track.url || `https://www.last.fm/user/${encodeURIComponent(lastfmUser)}`;

        lastfmWidget.replaceChildren();

        const trackLink = document.createElement('a');
        trackLink.href = link;
        trackLink.target = '_blank';
        trackLink.rel = 'noreferrer';
        trackLink.textContent = title;

        const artistLine = document.createElement('span');
        artistLine.textContent = `${artist}${nowPlaying ? ' (now playing)' : ''}`;

        lastfmWidget.append(trackLink, " - ", artistLine);
    } catch (error) {
        lastfmWidget.textContent = 'could not load Last.fm data';
    }
}

loadLastFmTrack();