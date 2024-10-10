document.addEventListener('DOMContentLoaded', function() {
    function animateValue(obj, start, end, duration) {
      let startTimestamp = null;
      const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
          window.requestAnimationFrame(step);
        }
      };
      window.requestAnimationFrame(step);
    }

    const studentCount = document.getElementById('studentCount');
    const courseCount = document.getElementById('courseCount');
    const companyCount = document.getElementById('companyCount');
    const branchCount = document.getElementById('branchCount');
    const certificationCount = document.getElementById('certificationCount');

    animateValue(studentCount, 0, 37500, 2000);
    animateValue(courseCount, 0, 50, 1500);
    animateValue(companyCount, 0, 1500, 2000);
    animateValue(branchCount, 0, 22, 1000);
    animateValue(certificationCount, 0, 8, 800);
  });