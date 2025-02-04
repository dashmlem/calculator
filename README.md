Калькулятор на HTML, CSS и JavaScript :)


Использованы семантически корректные теги: например, <div> для контейнера, <button> для кнопок и <input> для экрана ввода. Для кнопок я добавила onclick, чтобы они вызывали функции JS при нажатии. 

Калькулятор выглядит современно и стильно благодаря теням, закругленным углам и плавным анимациям, а также градиенту розовых цветов на фоне:). Я использовала box-shadow для того чтобы создать эффект выпуклостии придать объема и воздуха всем элементам.
Для центрирования калькулятора на странице и расположения кнопок я использовала flexbox.
! Калькулятор адаптируется под мобильные устройства. На экранах меньше 480px кнопки и экран ввода уменьшаются, чтобы все было удобно использовать.

Добавила эффекты при наведении (:hover) и нажатии (:active) на кнопки, чтобы интерфейс был интерактивным.

JS
Для обработки операторов и операндов с учетом их приоритетов я реализовала алгоритм обратной польской нотации (RPN). Это позволяет корректно считать сложные выражения со скобками и разными приоритетами операций.
Калькулятор сохраняет данные в localStorage, так что при перезагрузке выражение не теряется.
Кнопка DEL удаляет последний символ.
Кнопка CL полностью очищает экран и удаляет данные из localStorage.
