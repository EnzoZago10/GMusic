export default function formatTime(seconds) {
    if (!Number.isFinite(seconds) || seconds < 0) {
        return '00:00';
    }

    const totalSeconds = Math.floor(seconds);
    const minutos = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    return `${String(minutos).padStart(2, '0')}:${String(remainingSeconds).padStart(2, '0')}`;
}