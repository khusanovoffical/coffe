
      // Like bosish funksiyasi (Karta bosilganda modal ochilib ketmasligi uchun event.stopPropagation ishlatildi)
      function toggleLike(event, element, originalCount) {
        event.stopPropagation();
        element.classList.toggle("liked");
        const countSpan = element.querySelector(".count");

        if (element.classList.contains("liked")) {
          countSpan.innerText = originalCount + 1;
          showToast("Menu: Sevimlilarga qo‘shildi! ❤️");
        } else {
          countSpan.innerText = originalCount;
        }
      }

      // Karta bosilganda modalni ochish funksiyasi
      function openModal(title, description, price, imgUrl, cardElement) {
        document.getElementById("modalTitle").innerText = title;
        document.getElementById("modalDesc").innerText = description;
        document.getElementById("modalPrice").innerText = price;
        document.getElementById("modalImg").src = imgUrl;

        // Modal ichidagi sotib olish tugmasiga dinamik buy funksiyasini yuklash
        document.getElementById("modalBuyBtn").onclick = function () {
          buyCoffee(title);
          closeModal();
        };

        document.getElementById("infoModal").classList.add("open");
      }

      // Modalni yopish
      function closeModal() {
        document.getElementById("infoModal").classList.remove("open");
      }

      // Sotib olish / Savatga qo'shish drayveri
      function buyCoffee(name) {
        showToast(`${name} muvaffaqiyatli savatga qo‘shildi! ☕`);
      }

      // Toast Bildirishnoma chiqarish
      function showToast(message) {
        const toast = document.getElementById("toast");
        toast.querySelector("span").innerText = message;
        toast.classList.add("show");

        setTimeout(() => {
          toast.classList.remove("show");
        }, 3000);
      }

      // Modal oynadan tashqari joy bosilganda ham yopilishi uchun
      document
        .getElementById("infoModal")
        .addEventListener("click", function (e) {
          if (e.target === this) {
            closeModal();
          }
        });