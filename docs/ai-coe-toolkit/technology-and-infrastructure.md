---
sidebar_position: 4
---

# III. Hạ tầng AI
Hạ tầng AI có thể được ví như một hệ thống khai thác và chế biến dữ liệu, tương tự như quy trình khai thác tài nguyên thiên nhiên. Trong đó, dữ liệu thô được xem như nguồn nguyên liệu quý giá cần được thăm dò, khai thác và xử lý qua nhiều giai đoạn trước khi có thể tạo ra giá trị cho doanh nghiệp:

- **Thăm dò và Thu thập**: Giống như việc khảo sát địa chất để tìm mỏ khoáng sản, các tổ chức cần xác định và thu thập dữ liệu từ nhiều nguồn khác nhau trong hệ thống.

- **Vận chuyển và Tập trung**: Dữ liệu từ các nguồn khác nhau được đưa về một trung tâm dữ liệu tập trung, tương tự như việc vận chuyển nguyên liệu thô về nhà máy chế biến.

- **Tinh chế và Xử lý**: Dữ liệu thô được làm sạch, chuẩn hóa và chuyển đổi thành dạng có thể sử dụng được, giống như quá trình tinh lọc nguyên liệu thô thành sản phẩm có giá trị.

- **Phân phối và Sử dụng**: Cuối cùng, dữ liệu đã qua xử lý được đưa vào các mô hình AI và ứng dụng, phục vụ cho các nhu cầu khác nhau của người dùng cuối, tương tự như việc phân phối sản phẩm đến người tiêu dùng.

Hệ thống hạ tầng AI hiệu quả cần được thiết kế để hỗ trợ toàn bộ quy trình này một cách liền mạch, từ việc thu thập dữ liệu đến việc triển khai các mô hình AI vào thực tế, đảm bảo tính bảo mật, hiệu suất và khả năng mở rộng.

Dưới đây là hình ảnh minh họa cho hệ thống hạ tầng AI:

![Bird's Eye View of AI Infrastructure](/img/bird-eys-view.png)


## Độ trưởng thành của nền tảng AI

Nền tảng AI của một tổ chức thường trải qua nhiều giai đoạn trưởng thành, từ việc sử dụng các công cụ AI rời rạc cho đến khi đạt được mức độ tự động hóa hoàn toàn. Dưới đây là các giai đoạn chính trong quá trình này:

### Giai đoạn 1: Sử dụng các công cụ AI rời rạc
Ở giai đoạn này, các tổ chức thường sử dụng các công cụ và phần mềm AI riêng lẻ để giải quyết các vấn đề cụ thể. Các công cụ này có thể bao gồm các thư viện mã nguồn mở, các phần mềm thương mại hoặc các dịch vụ AI trên đám mây. Việc tích hợp và quản lý các công cụ này thường gặp nhiều khó khăn do thiếu sự đồng bộ và khả năng tương tác giữa chúng.

### Giai đoạn 2: Tích hợp các công cụ AI
Khi tổ chức bắt đầu nhận thấy giá trị của AI, họ sẽ tiến hành tích hợp các công cụ AI rời rạc vào một nền tảng chung. Giai đoạn này bao gồm việc xây dựng các pipeline dữ liệu, tích hợp các mô hình AI vào quy trình kinh doanh và tạo ra các giao diện người dùng để dễ dàng tương tác với các công cụ AI. Mục tiêu của giai đoạn này là tạo ra một hệ thống AI có tính liên kết và dễ dàng quản lý hơn.

### Giai đoạn 3: Tự động hóa một phần
Ở giai đoạn này, tổ chức bắt đầu tự động hóa một số quy trình AI, chẳng hạn như thu thập và xử lý dữ liệu, huấn luyện và triển khai mô hình. Các công cụ quản lý và giám sát mô hình AI cũng được triển khai để đảm bảo hiệu suất và độ tin cậy của các mô hình. Giai đoạn này giúp giảm bớt khối lượng công việc thủ công và tăng cường hiệu quả của các quy trình AI.

### Giai đoạn 4: Tự động hóa hoàn toàn
Đây là giai đoạn cao nhất của độ trưởng thành nền tảng AI, khi mà hầu hết các quy trình AI đều được tự động hóa hoàn toàn. Từ việc thu thập dữ liệu, xử lý, huấn luyện, triển khai đến giám sát và cải tiến mô hình, tất cả đều được thực hiện một cách tự động. Nền tảng AI ở giai đoạn này có khả năng tự học và tự điều chỉnh để tối ưu hóa hiệu suất và đáp ứng nhanh chóng các thay đổi trong môi trường kinh doanh. Điều này giúp tổ chức tận dụng tối đa tiềm năng của AI và đạt được lợi thế cạnh tranh bền vững.

## Các yếu tố cần cân nhắc khi xây dựng Modern Data Platform

Khi xây dựng một nền tảng dữ liệu hiện đại (Modern Data Platform), các tổ chức cần cân nhắc các yếu tố sau để đảm bảo nền tảng đáp ứng được nhu cầu kinh doanh và kỹ thuật:

<table>
  <thead>
    <tr>
      <th>Yếu tố</th>
      <th>Mô tả</th>
      <th>Công nghệ hỗ trợ</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Hiệu suất</td>
      <td>Đảm bảo các quy trình xử lý dữ liệu diễn ra nhanh chóng và hiệu quả, bao gồm khả năng xử lý các tập dữ liệu lớn và thực hiện các truy vấn phức tạp.</td>
      <td>Apache Spark, Presto, Druid</td>
    </tr>
    <tr>
      <td>Khả năng mở rộng</td>
      <td>Khả năng mở rộng linh hoạt để đáp ứng sự gia tăng về khối lượng dữ liệu và số lượng người dùng, bao gồm cả mở rộng theo chiều ngang và chiều dọc.</td>
      <td>Amazon S3, Google BigQuery, Azure Synapse</td>
    </tr>
    <tr>
      <td>Khả năng mở rộng tính năng</td>
      <td>Tích hợp với các công cụ và công nghệ mới, hỗ trợ các định dạng dữ liệu khác nhau và tích hợp với các hệ thống hiện có.</td>
      <td>REST APIs, GraphQL, Kafka</td>
    </tr>
    <tr>
      <td>Tuân thủ</td>
      <td>Áp dụng các chính sách truy cập dữ liệu và quy tắc bảo mật cho dữ liệu khi lưu trữ. Giám sát và báo cáo về việc sử dữ liệu, hoạt động và cảnh báo qua thông báo email. Khả năng quản trị trong dịch vụ sẽ được triển khai trên toàn bộ kiến trúc.</td>
      <td>Apache Atlas, Collibra, Informatica</td>
    </tr>
    <tr>
      <td>Bảo mật</td>
      <td>Bảo vệ dữ liệu nhạy cảm và đảm bảo tuân thủ các quy định về bảo mật thông tin, bao gồm: Áp dụng kiểm soát truy cập chi tiết trên các thực thể trong data lakehouse, lưu trữ thông tin xác thực kết nối nguồn dữ liệu trong Key Vault, đảm bảo an ninh dữ liệu khi lưu trữ và truyền tải, cấu hình bảo mật ở mức đối tượng và mức dữ liệu.</td>
      <td>HashiCorp Vault, Apache Ranger, AWS IAM</td>
    </tr>
  </tbody>
</table>

Tóm lại, khi xây dựng một nền tảng dữ liệu hiện đại, các tổ chức cần cân nhắc kỹ lưỡng các yếu tố về hiệu suất, khả năng mở rộng, khả năng mở rộng tính năng, quản trị và bảo mật để đảm bảo nền tảng đáp ứng được nhu cầu kinh doanh và kỹ thuật, đồng thời tạo ra giá trị bền vững cho doanh nghiệp.

## Mô hình của Databricks trong nền tảng dữ liệu AI

Databricks là nền tảng dữ liệu AI toàn diện, hỗ trợ từ thu thập, xử lý, phân tích đến triển khai mô hình. Nó kết hợp kiến trúc Lakehouse, tích hợp Data Lakes và Data Warehouses để lưu trữ dữ liệu thô và đã xử lý, giảm độ trễ và tăng khả năng truy cập. Delta Lake cung cấp ACID transactions và schema enforcement, đảm bảo dữ liệu nhất quán và hỗ trợ ETL phức tạp. Môi trường làm việc cộng tác cho phép các nhà khoa học dữ liệu, kỹ sư và nhà phân tích làm việc cùng nhau với công cụ như notebooks và dashboards. Databricks tích hợp sẵn các thư viện Machine Learning như TensorFlow và PyTorch, đơn giản hóa huấn luyện và triển khai mô hình. Nền tảng này xây dựng trên Apache Spark, xử lý dữ liệu phân tán mạnh mẽ, hỗ trợ streaming và batch processing. Tính năng bảo mật và tuân thủ như quản lý danh tính và mã hóa dữ liệu bảo vệ dữ liệu nhạy cảm. Databricks tích hợp với AWS, Azure, và Google Cloud, cho phép mở rộng quy mô linh hoạt. Mô hình này giúp tổ chức tối ưu hóa quy trình kinh doanh và tạo giá trị bền vững.

![Databricks Architecture](/img/databrick-architect.png)

## Vì sao nên áp dụng Databricks trong mô hình Data Platform?
<!-- Start of Selection -->

<table style={{width: "100%", borderCollapse: "collapse"}}>
  <tbody>
    <tr>
      <td style={{width: "50px", textAlign: "center", verticalAlign: "top"}}><span style={{fontSize: "48px"}}>🔗</span></td>
      <td>
        <h3>1. Tích hợp toàn diện</h3>
        <p>Databricks cung cấp một nền tảng tích hợp toàn diện cho việc thu thập, xử lý, phân tích và triển khai dữ liệu. Điều này giúp giảm thiểu sự phức tạp trong việc quản lý nhiều công cụ và hệ thống khác nhau, đồng thời tăng cường hiệu quả và tính nhất quán của quy trình làm việc.</p>
      </td>
    </tr>
    <tr>
      <td style={{textAlign: "center", verticalAlign: "top"}}><span style={{fontSize: "48px"}}>⚡</span></td>
      <td>
        <h3>2. Hiệu suất cao</h3>
        <p>Với khả năng xử lý dữ liệu phân tán mạnh mẽ dựa trên Apache Spark, Databricks cho phép xử lý các tập dữ liệu lớn một cách nhanh chóng và hiệu quả. Điều này giúp tổ chức tiết kiệm thời gian và tài nguyên, đồng thời tăng cường khả năng phân tích và ra quyết định dựa trên dữ liệu.</p>
      </td>
    </tr>
    <tr>
      <td style={{textAlign: "center", verticalAlign: "top"}}><span style={{fontSize: "48px"}}>🤝</span></td>
      <td>
        <h3>3. Hỗ trợ cộng tác</h3>
        <p>Databricks cung cấp một môi trường làm việc cộng tác, nơi các nhà khoa học dữ liệu, kỹ sư dữ liệu và nhà phân tích có thể làm việc cùng nhau trên cùng một nền tảng. Các công cụ như notebooks, dashboards và job scheduling giúp tối ưu hóa quy trình làm việc và tăng cường hiệu quả.</p>
      </td>
    </tr>
    <tr>
      <td style={{textAlign: "center", verticalAlign: "top"}}><span style={{fontSize: "48px"}}>🔒</span></td>
      <td>
        <h3>4. Bảo mật và tuân thủ</h3>
        <p>Databricks cung cấp các tính năng bảo mật và tuân thủ quy định như quản lý danh tính và truy cập, mã hóa dữ liệu và giám sát hoạt động. Điều này giúp bảo vệ dữ liệu nhạy cảm và đảm bảo tuân thủ các quy định về bảo mật thông tin.</p>
      </td>
    </tr>
    <tr>
      <td style={{textAlign: "center", verticalAlign: "top"}}><span style={{fontSize: "48px"}}>📈</span></td>
      <td>
        <h3>5. Khả năng mở rộng linh hoạt</h3>
        <p>Databricks tích hợp chặt chẽ với các nhà cung cấp dịch vụ đám mây lớn như AWS, Azure và Google Cloud, cho phép mở rộng quy mô linh hoạt theo nhu cầu của tổ chức. Điều này giúp tổ chức dễ dàng điều chỉnh tài nguyên và chi phí theo yêu cầu thực tế.</p>
      </td>
    </tr>
    <tr>
      <td style={{textAlign: "center", verticalAlign: "top"}}><span style={{fontSize: "48px"}}>🤖</span></td>
      <td>
        <h3>6. Hỗ trợ Machine Learning</h3>
        <p>Databricks tích hợp sẵn các thư viện và công cụ phổ biến cho Machine Learning như TensorFlow, PyTorch, Scikit-Learn và MLflow. Điều này giúp đơn giản hóa việc huấn luyện, theo dõi và triển khai các mô hình Machine Learning, từ đó tối ưu hóa quy trình kinh doanh và tạo ra giá trị bền vững.</p>
      </td>
    </tr>
    <tr>
      <td style={{textAlign: "center", verticalAlign: "top"}}><span style={{fontSize: "48px"}}>💧</span></td>
      <td>
        <h3>7. Tính năng Delta Lake</h3>
        <p>Delta Lake cung cấp các tính năng như ACID transactions, versioning và schema enforcement, giúp đảm bảo tính toàn vẹn và nhất quán của dữ liệu. Điều này hỗ trợ các quy trình ETL phức tạp và giúp tổ chức duy trì chất lượng dữ liệu cao.</p>
      </td>
    </tr>
  </tbody>
</table>

<!-- End of Selection -->

Tóm lại, việc áp dụng Databricks trong mô hình Data Platform giúp tổ chức tối ưu hóa quy trình làm việc với dữ liệu và AI, từ đó nâng cao hiệu suất, bảo mật và khả năng mở rộng, đồng thời tạo ra giá trị bền vững cho doanh nghiệp.

## Giai đoạn nào thì nên đưa Databricks vào sử dụng?

Ngay từ giai đoạn khởi đầu, tổ chức nên cân nhắc sử dụng Databricks để thiết lập nền tảng dữ liệu cơ bản. Databricks hỗ trợ thu thập và xử lý dữ liệu ban đầu, giúp tổ chức nhanh chóng bắt đầu các dự án AI nhỏ và thử nghiệm. Khả năng tích hợp với các công cụ và thư viện phổ biến giúp tổ chức dễ dàng khám phá và thử nghiệm các công nghệ AI mới.

Bằng cách đưa Databricks vào sử dụng từ giai đoạn đầu, tổ chức có thể xây dựng một nền tảng vững chắc cho các giai đoạn phát triển tiếp theo, tối ưu hóa quy trình làm việc với dữ liệu và AI, từ đó nâng cao hiệu suất, bảo mật và khả năng mở rộng, đồng thời tạo ra giá trị bền vững cho doanh nghiệp.