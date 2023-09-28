export const CATEGORIES = [
  {
    id: 1,
    name: 'Phần cứng',
    slug: 'phan-cung',
    description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
    numPosts: 0,
    children: [
      {
        id: 2,
        name: 'Thiết bị đầu vào',
        slug: 'thiet-bi-dau-vao',
        description: 'Là các công cụ hoặc phần cứng cho phép người dùng gửi thông tin hoặc dữ liệu vào máy tính, giúp tương tác và điều khiển các ứng dụng và chương trình.',
        numPosts: 0,
        children: [],
        cover: null,
        parent: {
          id: 1,
          name: 'Phần cứng',
          slug: 'phan-cung',
          description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Hardware',
          icon: 'material-symbols:hardware'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Input Devices',
        icon: 'material-symbols:input',
        topics: [
          {
            id: 1,
            title: 'Bàn phím (Keyboard)',
            createdAt: '2023-08-31T07:11:38.323908Z',
            slug: 'ban-phim',
            description: 'Thiết bị nhập liệu chính trên máy tính, cho phép người dùng gửi thông tin và tương tác với máy tính thông qua các phím.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 7,
            title: 'Microphone',
            createdAt: '2023-08-31T07:11:38.346313Z',
            slug: 'microphone',
            description: 'Thiết bị thu âm hoặc ghi âm, thường được sử dụng trong nhiều ứng dụng, từ gọi điện thoại đến thu âm âm nhạc.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 2,
            title: 'Chuột máy tính (Computer Mouse)',
            createdAt: '2023-08-31T07:11:38.328176Z',
            slug: 'chuot-may-tinh',
            description: 'Thiết bị đầu vào cho phép điều khiển con trỏ trên màn hình và thực hiện các tác vụ trên máy tính.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 3,
            title: 'Bút cảm ứng (Stylus)',
            createdAt: '2023-08-31T07:11:38.331870Z',
            slug: 'but-cam-ung',
            description: 'Thiết bị đặc biệt cho phép viết và vẽ trực tiếp trên màn hình máy tính, thường được sử dụng cho công việc sáng tạo và ghi chép điện tử.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 4,
            title: 'Máy quét (Scanner)',
            createdAt: '2023-08-31T07:11:38.335468Z',
            slug: 'may-quet',
            description: 'Thiết bị chuyên dùng để chuyển đổi tài liệu giấy thành hình ảnh số hóa trên máy tính.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 5,
            title: 'Máy quét dấu vân tay (Fingerprint scanner)',
            createdAt: '2023-08-31T07:11:38.339084Z',
            slug: 'may-quet-dau-van-tay',
            description: 'Thiết bị sử dụng để xác định và đăng nhập bằng việc quét và nhận dạng dấu vân tay của người dùng.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 6,
            title: 'Máy ảnh (Camera)',
            createdAt: '2023-08-31T07:11:38.342643Z',
            slug: 'may-anh',
            description: 'Thiết bị dùng để chụp và lưu trữ hình ảnh số hoặc ảnh in từ thế giới xung quanh.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 68,
            title: 'Màn hình cảm ứng (Touch Screen)',
            createdAt: '2023-08-31T07:12:06.767388Z',
            slug: 'man-hinh-cam-ung',
            description: 'Thiết bị hiển thị dữ liệu trên màn hình có khả năng phản ứng khi người dùng chạm vào, thường được sử dụng trong các thiết bị điện tử để tương tác và điều khiển.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          }
        ]
      },
      {
        id: 3,
        name: 'Thiết bị đầu ra',
        slug: 'thiet-bi-dau-ra',
        description: 'Là các phần cứng hoặc công cụ có khả năng hiển thị hoặc xuất thông tin, dữ liệu, hoặc kết quả từ máy tính hoặc thiết bị số khác.',
        numPosts: 0,
        children: [],
        cover: null,
        parent: {
          id: 1,
          name: 'Phần cứng',
          slug: 'phan-cung',
          description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Hardware',
          icon: 'material-symbols:hardware'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Output devices',
        icon: 'material-symbols:output',
        topics: [
          {
            id: 10,
            title: 'Loa (Speaker)',
            createdAt: '2023-08-31T07:11:38.356616Z',
            slug: 'loa',
            description: 'Thiết bị âm thanh chuyên dùng để phát ra âm thanh từ máy tính, điện thoại hoặc thiết bị khác.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 12,
            title: 'Máy chiếu (Projector)',
            createdAt: '2023-08-31T07:11:38.364517Z',
            slug: 'may-chieu',
            description: 'Thiết bị sử dụng để hiển thị hình ảnh hoặc video từ máy tính hoặc nguồn khác lên một bề mặt phẳng lớn, thường là màn hình hoặc tường.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 8,
            title: 'Màn hình (Monitor)',
            createdAt: '2023-08-31T07:11:38.349924Z',
            slug: 'man-hinh',
            description: 'Thiết bị hiển thị hình ảnh hoặc thông tin từ máy tính hoặc thiết bị khác, cho phép người dùng xem và tương tác với nội dung.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 9,
            title: 'Máy in (Printer)',
            createdAt: '2023-08-31T07:11:38.353152Z',
            slug: 'may-in',
            description: 'Thiết bị dùng để tạo bản in giấy hoặc các tài liệu khác từ dữ liệu số có sẵn trên máy tính hoặc thiết bị khác.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 11,
            title: 'Tai nghe (Headphone)',
            createdAt: '2023-08-31T07:11:38.360810Z',
            slug: 'tai-nghe',
            description: 'Thiết bị cá nhân cho phép người dùng nghe âm thanh từ máy tính, điện thoại hoặc thiết bị di động.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          }
        ]
      },
      {
        id: 5,
        name: 'Bộ nhớ',
        slug: 'bo-nho',
        description: 'Là một phần của máy tính được sử dụng để lưu trữ dữ liệu tạm thời trong quá trình hoạt động của máy tính.',
        numPosts: 0,
        children: [],
        cover: null,
        parent: {
          id: 1,
          name: 'Phần cứng',
          slug: 'phan-cung',
          description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Hardware',
          icon: 'material-symbols:hardware'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Memory',
        icon: 'material-symbols:memory-alt',
        topics: [
          {
            id: 27,
            title: 'Bộ đệm CPU (CPU Cache)',
            createdAt: '2023-08-31T07:11:38.423496Z',
            slug: 'cpu-cache',
            description: 'Là một bộ nhớ tạm thời nằm gần CPU, được sử dụng để lưu trữ dữ liệu và hướng dẫn thường xuyên truy cập, nhằm tăng tốc độ xử lý dữ liệu và giảm thời gian truy xuất từ bộ nhớ chính.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 24,
            title: 'Bộ nhớ đệm (Cache Memory)',
            createdAt: '2023-08-31T07:11:38.412424Z',
            slug: 'bo-nho-dem-0',
            description: 'Là một bộ phận của CPU hoặc hệ thống lưu trữ, được sử dụng để lưu trữ tạm thời dữ liệu và hướng dẫn thường xuyên truy cập, giúp tăng tốc độ xử lý dữ liệu.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 22,
            title: 'RAM - Bộ nhớ truy cập ngẫu nhiên (Random Access Memory)',
            createdAt: '2023-08-31T07:11:38.404716Z',
            slug: 'ram',
            description: 'Là một loại bộ nhớ trong máy tính được sử dụng để lưu trữ dữ liệu tạm thời cho việc xử lý nhanh chóng, cho phép CPU truy cập dữ liệu một cách ngẫu nhiên.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 23,
            title: 'ROM - Bộ nhớ chỉ đọc (Read-Only Memory)',
            createdAt: '2023-08-31T07:11:38.408240Z',
            slug: 'rom',
            description: 'Là một loại bộ nhớ trong máy tính chứa dữ liệu được lưu trữ cố định mà máy tính có thể đọc nhưng không thể thay đổi. Nó chứa các hướng dẫn cơ bản cho việc khởi động máy tính và hoạt động hệ thống.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 25,
            title: 'Bộ nhớ flash (Flash Memory)',
            createdAt: '2023-08-31T07:11:38.416210Z',
            slug: 'bo-nho-flash',
            description: 'Là một loại bộ nhớ không bay hơi được sử dụng rộng rãi trong các thiết bị điện tử để lưu trữ dữ liệu, ứng dụng, và hệ điều hành.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 26,
            title: 'EEPROM - Bộ nhớ chỉ đọc có thể lập trình có thể xóa bằng điện (Electrically Erasable Programmable Read-Only Memory)',
            createdAt: '2023-08-31T07:11:38.419917Z',
            slug: 'eeprom',
            description: 'Là một loại bộ nhớ chỉ đọc có thể lập trình và xóa bằng điện, cho phép dữ liệu được ghi, xóa và ghi lại một cách linh hoạt, thường được sử dụng để lưu trữ dữ liệu cài đặt và cấu hình trong các thiết bị điện tử.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          }
        ]
      },
      {
        id: 6,
        name: 'Bộ nhớ lưu trữ',
        slug: 'bo-nho-luu-tru',
        description: 'Là nơi lưu trữ dữ liệu dài hạn trên máy tính, bao gồm hệ thống tệp tin, ứng dụng và dữ liệu người dùng như hình ảnh, video, văn bản.',
        numPosts: 0,
        children: [],
        cover: 'https://media.tinhoc.org/category_images/og_img.png',
        parent: {
          id: 1,
          name: 'Phần cứng',
          slug: 'phan-cung',
          description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Hardware',
          icon: 'material-symbols:hardware'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Memory Storage',
        icon: 'material-symbols:home-storage',
        topics: [
          {
            id: 31,
            title: 'Ổ đĩa flash USB (USB flash drive)',
            createdAt: '2023-08-31T07:11:38.439572Z',
            slug: 'usb',
            description: 'Thiết bị lưu trữ dữ liệu di động, nhỏ gọn, kết nối qua cổng USB để chuyển, lưu trữ và truy cập dữ liệu từ máy tính hoặc thiết bị khác.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 30,
            title: 'Ổ đĩa cứng',
            createdAt: '2023-08-31T07:11:38.434940Z',
            slug: 'hdd',
            description: 'Là một thiết bị lưu trữ dữ liệu dài hạn trong máy tính, sử dụng đĩa quay để lưu trữ và truy cập thông tin.',
            otherName: 'Hard Disk Drive - HDD',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 29,
            title: 'Ổ đĩa thể rắn (Solid State Drive - SSD)',
            createdAt: '2023-08-31T07:11:38.430461Z',
            slug: 'ssd',
            description: 'Là một loại thiết bị lưu trữ dữ liệu không sử dụng bộ phận chuyển động, thay thế cho ổ đĩa cứng truyền thống, giúp tăng tốc độ truy cập và xử lý dữ liệu.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 32,
            title: 'Thẻ nhớ (Memory card)',
            createdAt: '2023-08-31T07:11:38.444270Z',
            slug: 'the-nho',
            description: 'Là một thiết bị lưu trữ dữ liệu nhỏ gọn, thường được sử dụng trong máy ảnh, điện thoại di động, hoặc các thiết bị điện tử khác để lưu trữ và chuyển dữ liệu.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 33,
            title: 'Ổ đĩa quang (Optical drive)',
            createdAt: '2023-08-31T07:11:38.449128Z',
            slug: 'o-dia-quang',
            description: 'Thiết bị đọc và ghi đĩa quang như đĩa CD, DVD, hoặc Blu-ray, cho phép lưu trữ và truy cập dữ liệu từ các loại đĩa quang khác nhau.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          }
        ]
      },
      {
        id: 4,
        name: 'Bộ xử lý trung tâm',
        slug: 'cpu',
        description: 'Thành phần quan trọng của máy tính, nó là trái tim của hệ thống. CPU thực hiện các phép tính và xử lý thông tin, làm cho máy tính hoạt động và thực hiện các tác vụ từ các ứng dụng và chương trình khác nhau.',
        numPosts: 0,
        children: [],
        cover: null,
        parent: {
          id: 1,
          name: 'Phần cứng',
          slug: 'phan-cung',
          description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Hardware',
          icon: 'material-symbols:hardware'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Central Processing Unit - CPU',
        icon: 'material-symbols:memory',
        topics: [
          {
            id: 15,
            title: 'Tốc độ xử lý của CPU (Processing Speed)',
            createdAt: '2023-08-31T07:11:38.376994Z',
            slug: 'toc-do-xu-ly',
            description: 'Đo lường khả năng thực hiện các phép tính và xử lý dữ liệu trong một đơn vị thời gian, quyết định hiệu suất của CPU trong máy tính.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 14,
            title: 'Bộ nhớ đệm của CPU (Cache Memory)',
            createdAt: '2023-08-31T07:11:38.372247Z',
            slug: 'bo-nho-dem-1',
            description: 'Là một bộ phận của CPU sử dụng để tạm thời lưu trữ dữ liệu và hướng dẫn từ bộ nhớ chính, giúp tăng hiệu suất xử lý.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 19,
            title: 'Đơn vị điều khiển CPU (Control Unit)',
            createdAt: '2023-08-31T07:11:38.393615Z',
            slug: 'don-vi-dieu-khien',
            description: 'Phần của CPU chịu trách nhiệm quản lý và điều khiển các hoạt động bên trong CPU, bao gồm lấy lệnh từ bộ nhớ và thực hiện chúng.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 21,
            title: 'Sức mạnh và Hiệu suất của CPU (Power and Performance)',
            createdAt: '2023-08-31T07:11:38.401080Z',
            slug: 'suc-manh-va-hieu-suat',
            description: 'Đo lường khả năng xử lý và thực hiện các tác vụ tính toán của trung tâm xử lý (CPU) trong máy tính, quyết định tốc độ và khả năng của hệ thống.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 13,
            title: 'Kiến trúc CPU (CPU Architecture)',
            createdAt: '2023-08-31T07:11:38.368029Z',
            slug: 'kien-truc-cpu',
            description: 'Cấu trúc và thiết kế nội bộ của trung tâm xử lý (CPU), quyết định cách nó thực hiện các phép tính và quản lý dữ liệu trong máy tính.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 16,
            title: 'Lõi của CPU (CPU Cores)',
            createdAt: '2023-08-31T07:11:38.381716Z',
            slug: 'loi-cpu',
            description: 'Các đơn vị xử lý chính trong trung tâm xử lý (CPU), mỗi lõi có khả năng thực hiện các phép tính độc lập, quyết định khả năng đa nhiệm và hiệu suất của CPU.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          }
        ]
      },
      {
        id: 7,
        name: 'Xử lý đồ họa',
        slug: 'xu-ly-do-hoa',
        description: 'Thiết bị đặc biệt giúp máy tính xử lý và hiển thị hình ảnh, đồ hoạ, và video một cách nhanh chóng và chất lượng cao.',
        numPosts: 0,
        children: [],
        cover: null,
        parent: {
          id: 1,
          name: 'Phần cứng',
          slug: 'phan-cung',
          description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Hardware',
          icon: 'material-symbols:hardware'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Graphics Processing',
        icon: 'mdi:expansion-card',
        topics: [
          {
            id: 36,
            title: 'CUDA / OpenCL',
            createdAt: '2023-08-31T07:11:38.463810Z',
            slug: 'cuda-opencl-0',
            description: 'Floor especially together per. Discuss either treat message dog. Including fish like economic.\nAlready several your character stuff seek want.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 39,
            title: 'Overclocking',
            createdAt: '2023-08-31T07:11:38.478672Z',
            slug: 'overclocking-0',
            description: 'Play minute factor police. Scientist hotel serve appear chair. Doctor reach often manager none.\nCell bank true offer let. Myself act effort camera that world. Raise husband describe finally.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 40,
            title: 'DirectX / OpenGL / Vulkan',
            createdAt: '2023-08-31T07:11:38.483687Z',
            slug: 'directx-opengl-vulkan-0',
            description: 'Stuff action might. Although south yeah local.\nEnvironmental message eat movie. Arrive to wife blood store strong war.\nSouthern country bar feel. A system recently meeting. Fine table pressure whose.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 34,
            title: 'GPU - Graphics Processing Unit',
            createdAt: '2023-08-31T07:11:38.454032Z',
            slug: 'gpu-graphics-processing-unit-0',
            description: 'Box rock parent how most space. Yet hotel within both. Beautiful response check letter.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 98,
            title: 'Overclocking',
            createdAt: '2023-08-31T07:12:06.881955Z',
            slug: 'overclocking-1',
            description: 'New security drive part mention. Which various issue condition.\nSecurity lay one theory trip college adult. Democrat each her.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 94,
            title: 'VRAM - Video RAM',
            createdAt: '2023-08-31T07:12:06.865715Z',
            slug: 'vram-video-ram-0',
            description: 'Rest population instead result democratic day when. Boy chair nearly environment nearly. Including word only often down player. Light brother treatment firm.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 96,
            title: 'Display Outputs',
            createdAt: '2023-08-31T07:12:06.874242Z',
            slug: 'display-outputs-0',
            description: 'Culture into blue see. Various guess class but standard hand. Throw nothing prove dark.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 38,
            title: 'Cooling and Heat Management',
            createdAt: '2023-08-31T07:11:38.473654Z',
            slug: 'cooling-and-heat-management-0',
            description: 'Possible space evidence door.\nFull travel southern write official morning. Might in couple indicate film.\nCurrent past relate too what. Member color generation could.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 35,
            title: 'VRAM - Video RAM',
            createdAt: '2023-08-31T07:11:38.458868Z',
            slug: 'vram-video-ram-1',
            description: 'Second move for turn exist. Leg cover example technology entire close occur. This skin coach meeting cell. Anyone case happen consumer feeling method.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 37,
            title: 'Display Outputs',
            createdAt: '2023-08-31T07:11:38.468705Z',
            slug: 'display-outputs-1',
            description: 'Down baby condition out truth responsibility minute. Onto style method study produce challenge cultural become. Family above relationship thus subject listen person.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 95,
            title: 'CUDA / OpenCL',
            createdAt: '2023-08-31T07:12:06.870304Z',
            slug: 'cuda-opencl-1',
            description: 'Understand director rise energy edge minute probably. Hair culture standard thank significant family.\nAnother good former without modern watch change. Happen alone standard area recognize.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 97,
            title: 'Cooling and Heat Management',
            createdAt: '2023-08-31T07:12:06.878074Z',
            slug: 'cooling-and-heat-management-1',
            description: 'Car at the person full fire. That recent staff likely common. Compare challenge more black reach some daughter.\nBack great necessary. Total able adult deal across. Big teach key certain.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 99,
            title: 'DirectX / OpenGL / Vulkan',
            createdAt: '2023-08-31T07:12:06.885810Z',
            slug: 'directx-opengl-vulkan-1',
            description: 'Throughout deep push of even prove either floor. Six light seem population hundred despite analysis hot.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 93,
            title: 'GPU - Graphics Processing Unit',
            createdAt: '2023-08-31T07:12:06.861979Z',
            slug: 'gpu-graphics-processing-unit-1',
            description: 'Raise in relate painting yard what. Prepare low stay position. Simple focus no security sister.\nNumber measure physical space prevent bank land me. Doctor south American style.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          }
        ]
      },
      {
        id: 8,
        name: 'Bo mạch chủ',
        slug: 'bo-mach-chu',
        description: 'Trái tim của máy tính, kết nối và điều khiển các linh kiện, cho phép hoạt động hài hòa của hệ thống.',
        numPosts: 0,
        children: [],
        cover: null,
        parent: {
          id: 1,
          name: 'Phần cứng',
          slug: 'phan-cung',
          description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Hardware',
          icon: 'material-symbols:hardware'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Mainboard',
        icon: 'material-symbols:developer-board',
        topics: [
          {
            id: 47,
            title: 'Maintenance and repairs',
            createdAt: '2023-08-31T07:11:38.517223Z',
            slug: 'maintenance-and-repairs-0',
            description: 'Single little moment fish first. Stock organization speech current church.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 43,
            title: 'Connection standards',
            createdAt: '2023-08-31T07:11:38.498992Z',
            slug: 'connection-standards-0',
            description: 'Understand toward amount wall police. Charge community bad face civil his mind.\nWoman official baby. Cold after edge political. Civil surface view kid approach continue.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 46,
            title: 'Compatibility',
            createdAt: '2023-08-31T07:11:38.512967Z',
            slug: 'compatibility-0',
            description: 'Home reach onto Democrat natural almost. Deep practice general.\nReflect score not guess. Suffer couple can yard.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 42,
            title: 'Types of motherboards',
            createdAt: '2023-08-31T07:11:38.493959Z',
            slug: 'types-of-motherboards-0',
            description: 'Common central here detail home woman. Second window group.\nClose wish foreign public. High camera we interest available pick. Than both song star arm.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 107,
            title: 'Emerging technologies',
            createdAt: '2023-08-31T07:12:06.916923Z',
            slug: 'emerging-technologies-0',
            description: 'Threat show wish method. Ahead all consider. Develop trial force.\nArt art seek part recently. Wear energy trial avoid old general.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 102,
            title: 'Connection standards',
            createdAt: '2023-08-31T07:12:06.898851Z',
            slug: 'connection-standards-1',
            description: 'Southern near letter forget traditional.\nNot staff discover wonder democratic. Offer grow history property charge. Fast citizen man store.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 104,
            title: 'Overclocking',
            createdAt: '2023-08-31T07:12:06.906301Z',
            slug: 'overclocking-2',
            description: 'Eight media wear social simple word. Through impact policy head buy focus thank stand.\nSpeak serve culture court. We away data return owner. Sound everything a anyone amount sense speak.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 100,
            title: 'Basic knowledge about the motherboard',
            createdAt: '2023-08-31T07:12:06.891227Z',
            slug: 'basic-knowledge-about-the-motherboard-0',
            description: 'Exist partner eat try. Recent personal anyone. Mean once small thought.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 48,
            title: 'Emerging technologies',
            createdAt: '2023-08-31T07:11:38.521253Z',
            slug: 'emerging-technologies-1',
            description: 'Wait western room pay drop letter. Partner right Congress. From later somebody piece way election.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 44,
            title: 'BIOS and UEFI',
            createdAt: '2023-08-31T07:11:38.503264Z',
            slug: 'bios-and-uefi-0',
            description: 'Light hour two option. Particularly law several just nothing blue.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 45,
            title: 'Overclocking',
            createdAt: '2023-08-31T07:11:38.508084Z',
            slug: 'overclocking-3',
            description: 'Receive speech friend call car same personal. Street six but speak.\nForce artist want this his right concern himself. Threat behavior hand huge allow half. Wait dark become must allow.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 41,
            title: 'Basic knowledge about the motherboard',
            createdAt: '2023-08-31T07:11:38.488913Z',
            slug: 'basic-knowledge-about-the-motherboard-1',
            description: 'Heavy let along.\nCourt among then wind. Enough brother board strategy structure coach year. Congress compare describe spend several affect.\nCenter group teach. Plant state field fill chair.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 103,
            title: 'BIOS and UEFI',
            createdAt: '2023-08-31T07:12:06.902660Z',
            slug: 'bios-and-uefi-1',
            description: 'Safe south involve piece safe finally school. Pattern occur sure capital attention.\nAgain standard leg among. Care candidate skin example future practice. Cup shoulder summer often.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 106,
            title: 'Maintenance and repairs',
            createdAt: '2023-08-31T07:12:06.913435Z',
            slug: 'maintenance-and-repairs-1',
            description: 'Imagine conference compare far goal. Box individual alone church minute cut. Understand worker member another career sure. Young market skill charge.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 105,
            title: 'Compatibility',
            createdAt: '2023-08-31T07:12:06.909875Z',
            slug: 'compatibility-1',
            description: 'Into force enjoy south Congress. Common major space buy color center push.\nBase job evidence produce that able. Study main agree office hear minute.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 101,
            title: 'Types of motherboards',
            createdAt: '2023-08-31T07:12:06.895161Z',
            slug: 'types-of-motherboards-1',
            description: 'Agent lead maintain statement concern society Congress.\nWeight apply especially speech seek audience company. Indeed reflect wonder international. Likely total happy about.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          }
        ]
      },
      {
        id: 9,
        name: 'Nguồn điện',
        slug: 'nguon-dien',
        description: 'Thiết bị cung cấp năng lượng điện cho máy tính và các linh kiện khác, quan trọng để hoạt động ổn định của hệ thống.',
        numPosts: 0,
        children: [],
        cover: null,
        parent: {
          id: 1,
          name: 'Phần cứng',
          slug: 'phan-cung',
          description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Hardware',
          icon: 'material-symbols:hardware'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Power Supply',
        icon: 'material-symbols:power-plug',
        topics: [
          {
            id: 56,
            title: 'Markings and Certifications',
            createdAt: '2023-08-31T07:11:38.559066Z',
            slug: 'markings-and-certifications-0',
            description: 'Power I century fund. Town which age thought year win. Significant science once because wall south. Color world store official.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 54,
            title: 'Cooling Fans',
            createdAt: '2023-08-31T07:11:38.550223Z',
            slug: 'cooling-fans-0',
            description: 'Condition can commercial return first much. Call election party vote service theory computer.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 49,
            title: 'Power Supply Types',
            createdAt: '2023-08-31T07:11:38.525279Z',
            slug: 'power-supply-types-0',
            description: 'Yes nearly low skin the.\nWrong push dream successful as poor. Local tell outside remain. Line house south.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 53,
            title: 'Protection and Synchronization',
            createdAt: '2023-08-31T07:11:38.545114Z',
            slug: 'protection-and-synchronization-0',
            description: 'Themselves can war away play create customer. Especially cultural per lose day build result.\nMinute evidence wall law why page side. Brother drug three have size power.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 116,
            title: 'Compatibility and Installation',
            createdAt: '2023-08-31T07:12:06.949273Z',
            slug: 'compatibility-and-installation-0',
            description: 'Above wait build media really shoulder. Improve face member store.\nWrong prepare down each occur spend easy. Artist him professor. With nation investment design somebody section against.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 113,
            title: 'Cooling Fans',
            createdAt: '2023-08-31T07:12:06.939165Z',
            slug: 'cooling-fans-1',
            description: 'Community power center produce eight without. Especially become candidate month worry prepare. Technology expect bank red space mention.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 111,
            title: 'Connection Standards',
            createdAt: '2023-08-31T07:12:06.932291Z',
            slug: 'connection-standards-2',
            description: 'Data this close American. Where understand difference three who today.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 109,
            title: 'Wattage',
            createdAt: '2023-08-31T07:12:06.925264Z',
            slug: 'wattage-0',
            description: 'Federal measure life box best meeting. Maintain benefit water probably his would at.\nNatural consider military do. They threat all position him seven officer.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 57,
            title: 'Compatibility and Installation',
            createdAt: '2023-08-31T07:11:38.563251Z',
            slug: 'compatibility-and-installation-1',
            description: 'Throughout tax name change heart. Detail eight compare lose along.\nAccording including black late weight. Exactly total final control idea top new big. Left Congress though space material pay.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 52,
            title: 'Connection Standards',
            createdAt: '2023-08-31T07:11:38.540022Z',
            slug: 'connection-standards-3',
            description: 'Series successful college paper. Authority sister audience piece trial.\nActivity this to. None policy factor.\nWhile lot however century oil focus meet. Letter once stuff within whether sea.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 51,
            title: 'Efficiency',
            createdAt: '2023-08-31T07:11:38.535099Z',
            slug: 'efficiency-0',
            description: 'Successful page hot wait reason cause. Stay she represent TV popular every. Surface behind series important base poor.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 55,
            title: 'Modular vs Non-modular Power Supply',
            createdAt: '2023-08-31T07:11:38.554777Z',
            slug: 'modular-vs-non-modular-power-supply-0',
            description: 'Scene pattern sure since total. Box professional while feel watch. Moment perhaps I it cup garden measure be.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 50,
            title: 'Wattage',
            createdAt: '2023-08-31T07:11:38.530085Z',
            slug: 'wattage-1',
            description: 'Suddenly vote win growth view church.\nDifficult to truth seat task.\nHuman adult well career coach street away. Nice provide give compare play our teacher. Form likely rise break nation.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 110,
            title: 'Efficiency',
            createdAt: '2023-08-31T07:12:06.928680Z',
            slug: 'efficiency-1',
            description: 'Must past here trip enough. Minute only technology rather future deal reflect. The couple wait like.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 115,
            title: 'Markings and Certifications',
            createdAt: '2023-08-31T07:12:06.945955Z',
            slug: 'markings-and-certifications-1',
            description: 'Trip impact close its. Send girl west example. Present cultural both PM possible ever memory.\nRise business mouth military. Worry public bed southern serve increase money.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 108,
            title: 'Power Supply Types',
            createdAt: '2023-08-31T07:12:06.921718Z',
            slug: 'power-supply-types-1',
            description: 'Argue whom pressure professional. Throw rock treat try method benefit event.\nPhysical recently card attorney work country man wife. Example parent eat.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 112,
            title: 'Protection and Synchronization',
            createdAt: '2023-08-31T07:12:06.935737Z',
            slug: 'protection-and-synchronization-1',
            description: 'Myself simple through medical draw. Which generation agreement piece decide throw.\nGrow suffer fill fund audience. Situation cut indeed along common if air. Win kind pull public study church.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 114,
            title: 'Modular vs Non-modular Power Supply',
            createdAt: '2023-08-31T07:12:06.942573Z',
            slug: 'modular-vs-non-modular-power-supply-1',
            description: 'Pull we point trial theory still maintain none. Thousand during message community.\nThing down fast daughter pay miss entire statement. Point short end. Experience decision keep degree responsibility.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          }
        ]
      },
      {
        id: 10,
        name: 'Thiết bị kết nối',
        slug: 'thiet-bi-ket-noi',
        description: 'Các công cụ quan trọng trong mạng máy tính, giúp đảm bảo liên lạc và truyền dữ liệu giữa các thiết bị và mạng.',
        numPosts: 0,
        children: [],
        cover: null,
        parent: {
          id: 1,
          name: 'Phần cứng',
          slug: 'phan-cung',
          description: 'Gồm các thành phần vật lý của máy tính như máy tính xách tay, máy tính để bàn, điện thoại thông minh, máy tính bảng, các linh kiện như CPU, RAM, ổ cứng, card đồ họa,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Hardware',
          icon: 'material-symbols:hardware'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Connection Device',
        icon: 'icon-park-solid:circular-connection',
        topics: [
          {
            id: 61,
            title: 'Modem',
            createdAt: '2023-08-31T07:11:38.582170Z',
            slug: 'modem-0',
            description: 'By read fire positive TV. Send trip us less wear along month.\nPretty age home positive occur them. Later Mr voice manager. Expert move tonight democratic they operation.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 65,
            title: 'Wireless Network Adapter',
            createdAt: '2023-08-31T07:11:38.597896Z',
            slug: 'wireless-network-adapter-0',
            description: 'Notice may finally PM season. Late conference practice spend spend. What describe large. Mr artist hour doctor teacher positive realize.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 58,
            title: 'Router',
            createdAt: '2023-08-31T07:11:38.567971Z',
            slug: 'router-0',
            description: 'Author enter prevent seem. Wish write mission what about government. Include what along lawyer scene bring. Main democratic phone air course determine.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 64,
            title: 'Network Cable',
            createdAt: '2023-08-31T07:11:38.594039Z',
            slug: 'network-cable-0',
            description: 'Voice officer easy. So chair sing.\nResource trade source body. Leg by everyone another. Air science spring a while.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 120,
            title: 'Modem',
            createdAt: '2023-08-31T07:12:06.963752Z',
            slug: 'modem-1',
            description: 'In Republican stock hair success talk state degree. Thing computer again radio.\nHair then page me car power prepare appear. Mouth difficult down.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 117,
            title: 'Router',
            createdAt: '2023-08-31T07:12:06.953845Z',
            slug: 'router-1',
            description: 'Peace remain place man age they. Pressure seem where point support involve interesting tell.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 123,
            title: 'Network Cable',
            createdAt: '2023-08-31T07:12:06.973749Z',
            slug: 'network-cable-1',
            description: 'Each not think forward hotel future. Stand poor Mrs act occur source. High understand pretty job.\nGuy save analysis but activity. Eight their wish coach tree usually.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 59,
            title: 'Switch',
            createdAt: '2023-08-31T07:11:38.572879Z',
            slug: 'switch-0',
            description: 'Say offer network ability business probably shoulder. Ahead understand rate fine improve main account. Let probably seek east start.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 62,
            title: 'Bridge',
            createdAt: '2023-08-31T07:11:38.586218Z',
            slug: 'bridge-0',
            description: 'Clear collection author during evidence section find. Method book continue television model painting. Attention energy approach wide baby address herself. Cause protect behavior who.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 60,
            title: 'Access Point',
            createdAt: '2023-08-31T07:11:38.577901Z',
            slug: 'access-point-0',
            description: 'Subject mean plan support school. Glass recent food quality. Two could thought fire blue.\nLine character outside. Buy husband air land federal medical.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 63,
            title: 'Network Interface Card - NIC',
            createdAt: '2023-08-31T07:11:38.590139Z',
            slug: 'network-interface-card-nic-0',
            description: 'Music huge human condition think event at. World scientist economy always go piece though garden.\nThough risk part matter role who. Road city people just course start big.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 118,
            title: 'Switch',
            createdAt: '2023-08-31T07:12:06.957037Z',
            slug: 'switch-1',
            description: 'Matter sometimes institution own ask. Send condition participant car exist simply.\nHome body important kitchen save shake reduce worry. Identify just plant loss baby might.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 119,
            title: 'Access Point',
            createdAt: '2023-08-31T07:12:06.960375Z',
            slug: 'access-point-1',
            description: 'Those all north simply position government. Discuss win catch throw thank east north prove.\nLittle time paper that modern. Box southern mission manager drop. Population close should agreement.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 124,
            title: 'Wireless Network Adapter',
            createdAt: '2023-08-31T07:12:06.977862Z',
            slug: 'wireless-network-adapter-1',
            description: 'Follow on success order dinner. Program society exist. Record industry charge five. Idea agree course card including risk.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 121,
            title: 'Bridge',
            createdAt: '2023-08-31T07:12:06.967102Z',
            slug: 'bridge-1',
            description: 'Agent conference industry recent. Least dark their economic west glass.\nTrip rule send whole my relationship artist. Help down show five keep without present.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          },
          {
            id: 122,
            title: 'Network Interface Card - NIC',
            createdAt: '2023-08-31T07:12:06.970450Z',
            slug: 'network-interface-card-nic-1',
            description: 'Mean left relate guess. Guess card security indeed in. Republican soon surface low up general environmental.',
            otherName: 'Đang cập nhật',
            icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
          }
        ]
      }
    ],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'Hardware',
    icon: 'material-symbols:hardware',
    topics: []
  },
  {
    id: 24,
    name: 'Quản lý CNTT',
    slug: 'quan-ly-cntt',
    description: 'Quản lý dự án CNTT, quản lý hạ tầng mạng, quản lý dịch vụ CNTT.',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'IT Management',
    icon: 'fluent-mdl2:recruitment-management',
    topics: []
  },
  {
    id: 22,
    name: 'Thiết kế UI/UX',
    slug: 'uiux-design',
    description: 'Thiết kế giao diện và trải nghiệm người dùng tốt nhất cho các ứng dụng và trang web.',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'UI/UX Design',
    icon: 'mdi:design',
    topics: []
  },
  {
    id: 20,
    name: 'IoT',
    slug: 'IoT',
    description: 'Kết nối các thiết bị thông qua internet, ứng dụng IoT trong đời sống hàng ngày, quản lý thiết bị thông qua mạng,...',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'Internet of Things',
    icon: 'eos-icons:iot',
    topics: []
  },
  {
    id: 15,
    name: 'Lập trình',
    slug: 'lap-trinh',
    description: 'Các ngôn ngữ lập trình, kỹ thuật lập trình, phát triển ứng dụng, lập trình web, lập trình di động,...',
    numPosts: 0,
    children: [
      {
        id: 16,
        name: 'Phát triển web',
        slug: 'phat-trien-web',
        description: 'Thiết kế và phát triển các trang web, front-end, back-end, responsive design, UI/UX,...',
        numPosts: 0,
        children: [],
        cover: null,
        parent: {
          id: 15,
          name: 'Lập trình',
          slug: 'lap-trinh',
          description: 'Các ngôn ngữ lập trình, kỹ thuật lập trình, phát triển ứng dụng, lập trình web, lập trình di động,...',
          numPosts: 0,
          topics: [],
          parent: null,
          cover: null,
          numArticles: 0,
          numThreads: 0,
          otherName: 'Programming',
          icon: 'solar:programming-outline'
        },
        numArticles: 0,
        numThreads: 0,
        otherName: 'Web Development',
        icon: 'foundation:web',
        topics: []
      }
    ],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'Programming',
    icon: 'solar:programming-outline',
    topics: []
  },
  {
    id: 17,
    name: 'Trí tuệ nhân tạo',
    slug: 'ai',
    description: 'Machine learning, deep learning, xử lý ngôn ngữ tự nhiên, thị giác máy tính, robotics,...',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'Artificial Intelligence',
    icon: 'game-icons:artificial-intelligence',
    topics: []
  },
  {
    id: 19,
    name: 'Điện toán đám mây',
    slug: 'dien-toan-dam-may',
    description: 'Các dịch vụ đám mây, lưu trữ trực tuyến, tính toán đám mây, quản lý dịch vụ đám mây,...',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'Cloud Computing',
    icon: 'tabler:cloud-computing',
    topics: []
  },
  {
    id: 18,
    name: 'Khoa học dữ liệu',
    slug: 'khoa-hoc-du-lieu',
    description: 'Khám phá, phân tích, và hiểu biết từ dữ liệu, xử lý dữ liệu lớn, trí tuệ kinh doanh,...',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'Data Science',
    icon: 'uil:science',
    topics: []
  },
  {
    id: 13,
    name: 'Mạng máy tính',
    slug: 'mang-may-tinh',
    description: 'Các khía cạnh về mạng máy tính, bao gồm mạng LAN, WAN, cài đặt mạng, bảo mật mạng, kết nối internet,...',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'Network',
    icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack',
    topics: []
  },
  {
    id: 12,
    name: 'Phần mềm',
    slug: 'phan-mem',
    description: 'Bao gồm các ứng dụng và chương trình máy tính, hệ điều hành, phần mềm ứng dụng, phần mềm mã nguồn mở,...',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'Software',
    icon: 'eos-icons:software',
    topics: []
  },
  {
    id: 14,
    name: 'An ninh mạng',
    slug: 'an-ninh-mang',
    description: 'Lĩnh vực chuyên về bảo vệ hệ thống, dữ liệu và thông tin trên mạng khỏi các mối đe dọa, tấn công và việc sử dụng trái phép.',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: 'Cybersecurity',
    icon: 'material-symbols:security',
    topics: []
  },
  {
    id: 37,
    name: 'Tin học văn phòng',
    slug: 'tin-hoc-van-phong',
    description: 'Tin học văn phòng',
    numPosts: 0,
    children: [],
    cover: null,
    parent: null,
    numArticles: 0,
    numThreads: 0,
    otherName: null,
    icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack',
    topics: [
      {
        id: 136,
        title: 'Mẹo vặt microsoft word',
        createdAt: '2023-09-24T08:24:07.919165Z',
        slug: 'meo-vat-microsoft-word',
        description: 'Mẹo vặt microsoft word',
        otherName: null,
        icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
      },
      {
        id: 137,
        title: 'Mẹo vặt microsoft excel',
        createdAt: '2023-09-24T08:24:07.920099Z',
        slug: 'meo-vat-microsoft-excel',
        description: 'Mẹo vặt microsoft word',
        otherName: null,
        icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
      },
      {
        id: 138,
        title: 'Mẹo vặt microsoft powerpoint',
        createdAt: '2023-09-24T08:24:07.920863Z',
        slug: 'meo-vat-microsoft-powerpoint',
        description: 'Mẹo vặt microsoft powerpoint',
        otherName: null,
        icon: 'streamline:interface-edit-pin-2-pin-push-thumbtack'
      }
    ]
  }
]
