'use strict';
const clips = {
  figurines: [{key:'Pikachu',label:'Pikachu'},{key:'jake',label:'jake'}],
  ramen: [{key:'eggs',label:'eggs'},{key:'pork_belly',label:'pork belly'}],
  bed: [{key:'camera',label:'camera'},{key:'shoe',label:'shoe'}],
  sofa: [{key:'Gundam',label:'Gundam'},{key:'UNO_cards',label:'UNO cards'}]
};
const video = document.getElementById('demo-video');
const query = document.getElementById('query');
const status = document.getElementById('video-status');
let scene = 'figurines';
let requestId = 0;
function changeVideo() {
  const id = ++requestId;
  const clip = clips[scene].find(item => item.key === query.value);
  const path = `assets/videos/scene_${scene}_prompt_${clip.key}.mp4`;
  const sceneLabel = scene.charAt(0).toUpperCase() + scene.slice(1);
  video.pause();
  status.hidden = true;
  video.poster = `assets/images/${scene}-${clip.key}.jpg`;
  video.src = path;
  video.setAttribute('aria-label', `${sceneLabel} scene, ${clip.label} query: original scene, prediction, and depth`);
  video.load();
  document.getElementById('demo-caption').textContent = `${sceneLabel} · “${clip.label}”`;
  document.getElementById('video-download').href = path;
  video.play().catch(() => {
    if (id !== requestId) return;
    // Native playback controls remain available if autoplay is blocked.
  });
}
document.querySelectorAll('.scene').forEach(button => {
  button.addEventListener('click', () => {
    scene = button.dataset.scene;
    document.querySelectorAll('.scene').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
    });
    query.replaceChildren(...clips[scene].map(clip => new Option(clip.label, clip.key)));
    changeVideo();
  });
});
query.addEventListener('change', changeVideo);
video.addEventListener('error', () => {
  status.textContent = 'The video could not be loaded. Please try downloading the clip using the link above.';
  status.hidden = false;
});
// Both tables remain readable when JavaScript is disabled.
document.getElementById('ovs-table').hidden = true;
document.querySelectorAll('.benchmark').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.benchmark').forEach(item => {
      const selected = item === button;
      item.classList.toggle('active', selected);
      item.setAttribute('aria-pressed', String(selected));
      document.getElementById(`${item.dataset.benchmark}-table`).hidden = !selected;
    });
  });
});
