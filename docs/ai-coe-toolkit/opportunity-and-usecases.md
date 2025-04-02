---
sidebar_position: 2
---

# I. Hệ thống Use Case Deck (UCD)

## Use Case Deck là gì?
AI Use Case Deck là một tập hợp các tài liệu và công cụ được thiết kế để giúp doanh nghiệp xác định, đánh giá và triển khai các cơ hội ứng dụng AI một cách hiệu quả. Use Case Deck cung cấp một khung làm việc có cấu trúc, giúp các nhóm trong doanh nghiệp dễ dàng tìm kiếm và phát triển các giải pháp AI phù hợp với nhu cầu cụ thể của họ.

Một Use Case Deck thường bao gồm các thành phần sau:
- **Mô tả Use Case**: Giới thiệu ngắn gọn về vấn đề cần giải quyết và cách AI có thể giúp giải quyết vấn đề đó.
- **Đánh giá tác động và rủi ro**: Đánh giá giá trị tiềm năng và các rủi ro liên quan đến Use Case đối với doanh nghiệp, bao gồm các lợi ích về tài chính, hiệu suất và chiến lược.
- **Tính năng và khả năng đề xuất**: Mô tả các tính năng và khả năng dự kiến của giải pháp AI để đáp ứng nhu cầu cụ thể.
- **Kiến trúc giải pháp**: Phác thảo kiến trúc giải pháp, bao gồm các thành phần kỹ thuật và cách chúng tương tác với nhau.
- **Phạm vi và thời gian thực hiện MVP**: Xác định phạm vi và thời gian thực hiện của sản phẩm khả thi tối thiểu (MVP), bao gồm các bước cụ thể và thời gian thực hiện.
- **Đội ngũ phát triển**: Mô tả danh sách nhân sự cần thiết để phát triển và triển khai Use Case, bao gồm các vai trò và trách nhiệm cụ thể.

Use Case Deck giúp doanh nghiệp có cái nhìn tổng quan và chi tiết về từng cơ hội ứng dụng AI, từ đó đưa ra quyết định chiến lược và tối ưu hóa việc triển khai AI trong tổ chức.

Ví dụ 1 use case deck mẫu
### Ví dụ về Use Case Deck: Phân khúc khách hàng

<table>
  <thead>
    <tr style={{backgroundColor: '#2E76B4'}}>
      <th><span style={{color: 'white'}}>USE CASE #</span></th>
      <th colspan="3"><span style={{color: 'white'}}>Phân khúc khách hàng</span></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Context of use</span></td>
      <td colspan="3">Trang Huy Group (THG) phục vụ một cơ sở khách hàng đa dạng (B2B, B2C & C2C) từ các cá nhân tiêu dùng đến các doanh nghiệp lớn trên nhiều dịch vụ như giao hàng bưu kiện, logistics và thương mại điện tử. Hiện tại, khả năng của THG trong việc nhắm mục tiêu và cá nhân hóa dịch vụ cho các phân khúc khách hàng khác nhau bị hạn chế do quy trình phân khúc khách hàng thủ công, dựa trên quy tắc. Điều này dẫn đến các chiến dịch tiếp thị chung chung, phân bổ tài nguyên không hiệu quả và trải nghiệm khách hàng không tối ưu, dẫn đến các cơ hội tăng trưởng doanh thu và giữ chân khách hàng bị bỏ lỡ.</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Scope</span></td>
      <td colspan="3">Khả năng thực hiện phân khúc động bằng cách liên tục phân tích hành vi, sở thích và lịch sử giao dịch của khách hàng.</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Primary actor</span></td>
      <td colspan="3">Nhóm tiếp thị và phân tích dữ liệu của THG</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Stakeholders and interests</span></td>
      <td colspan="3">
        **Stakeholder:** Đội ngũ bán hàng  
        **Interest:** Hỗ trợ bán thêm và bán chéo nhiều sản phẩm
      </td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Success end condition</span></td>
      <td colspan="3">Tối đa hóa tỷ lệ chuyển đổi với lợi tức tốt hơn trên chi tiêu tiếp thị.</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Failure protection</span></td>
      <td colspan="3">Giải pháp bảo vệ dữ liệu và tuân thủ quy định về bảo mật thông tin cá nhân.</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Trigger</span></td>
      <td colspan="3">Khởi động quy trình phân khúc khách hàng bằng AI khi có dữ liệu mới.</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Main course</span></td>
      <td colspan="3">
        **Step 1:** Thu thập và xử lý dữ liệu khách hàng  
        **Step 2:** Áp dụng mô hình AI để phân khúc khách hàng  
        **Step 3:** Triển khai chiến lược tiếp thị nhắm mục tiêu
      </td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Extensions</span></td>
      <td colspan="3">
        **Step 1a:** Điều chỉnh mô hình AI khi có thay đổi trong hành vi khách hàng  
        **Step 2a:** Phân tích dữ liệu để cải thiện mô hình
      </td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Open issues</span></td>
      <td colspan="3">Các vấn đề về chất lượng dữ liệu và thiên vị cần được giải quyết.</td>
    </tr>
    <tr style={{backgroundColor: '#2E76B4'}}>
      <td colspan="4"><span style={{color: 'white'}}>Evaluation</span></td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Business impact</span></td>
      <td>High</td>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Business impact score</span></td>
      <td>9</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>AI readiness</span></td>
      <td>Moderate</td>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>AI readiness score</span></td>
      <td>6</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Data readiness</span></td>
      <td>Moderate</td>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Data readiness score</span></td>
      <td>7</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Overview score</span></td>
      <td colspan="3">9</td>
    </tr>
    <tr>
      <td style={{backgroundColor: '#2E76B4'}}><span style={{color: 'white'}}>Tagging</span></td>
      <td style={{backgroundColor: '#C5FECA'}} colspan="3">Quick win</td>
    </tr>
  </tbody>
</table>


### Hệ thống Use Case Deck
Hệ thống Use Case Deck dùng để quản trị toàn bộ các AI use case nhằm có cái nhìn tổng thể cho một tổ chức hoặc một phòng ban. Hệ thống này giúp theo dõi, đánh giá và quản lý các use case từ giai đoạn ý tưởng đến triển khai và mở rộng. Hệ thống Use Case Deck không chỉ giúp quản lý các use case một cách hiệu quả mà còn tạo điều kiện cho việc chia sẻ kiến thức và kinh nghiệm giữa các phòng ban, từ đó nâng cao năng lực AI toàn diện cho tổ chức.

### Hình ảnh minh họa

Dưới đây là hình ảnh minh họa cho việc đánh giá và phân loại các Use Case:

![Scoring Key Use Cases](/img/scoring-key-use-cases.png)

- Quy trình triển khai Use Case Deck
<table>
  <thead>
    <tr>
      <th>Giai đoạn</th>
      <th>Mô tả</th>
      <th>Kết quả mong đợi</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Xây dựng UCD</td>
      <td>Thu thập và phát triển các ý tưởng AI từ các phòng ban và nhóm chuyên gia.</td>
      <td>Danh sách các ý tưởng AI tiềm năng.</td>
    </tr>
    <tr>
      <td>Đánh giá sàn lọc</td>
      <td>
        Ý tưởng được đánh giá dựa trên các yếu tố sau:
        - Tác động đến kinh doanh
        - Sự phù hợp với chiến lược doanh nghiệp
        - Độ sẵn sàng của hệ thống
        - Độ sẵn sàng của dữ liệu
      </td>
      <td>Danh sách các AI Use Case được chọn lọc.</td>
    </tr>
    <tr>
      <td>Lên kế hoạch</td>
      <td>Xây dựng kế hoạch chi tiết cho việc phát triển và triển khai các Use Case đã chọn, bao gồm phân bổ nguồn lực và xác định các mốc thời gian quan trọng.</td>
      <td>Kế hoạch triển khai chi tiết và lịch trình thực hiện.</td>
    </tr>
    <tr>
      <td>Xây dựng POC</td>
      <td>Phát triển Proof of Concept (POC) để kiểm chứng tính khả thi của các ý tưởng AI đã chọn.</td>
      <td>POC hoàn chỉnh và báo cáo kết quả.</td>
    </tr>
    <tr>
      <td>Đánh giá POC</td>
      <td>
      Đánh giá POC bao gồm các phần sau:
      - Xem xét kết quả
      - Quyết định các bước tiếp theo
        - Tiếp tục mở rộng hoặc dừng 
        - Chi phí triển khai
      </td>
      <td>Báo cáo đánh giá POC và quyết định về việc tiếp tục triển khai.</td>
    </tr>
    <tr>
      <td>Triển khai</td>
      <td>
        Triển khai AI Use case trong thực tế bao gồm việc:
        - Triển khai hệ thống production
        - Truyền thông người dùng
        - Đánh giá kết quả định kỳ
        - Kiểm soát chi phí
      </td>
      <td>Giải pháp AI được triển khai và hoạt động hiệu quả.</td>
    </tr>
  </tbody>
</table>

II. Năng lực
- Kiến thức
- Động lực
- Chính sách

III. Hạ tầng hệ thống
- SaaS
- Cloud base AI
- Data platform

4. Quy trình triển khai CoE
- Chuẩn bị
- Đánh giá thực trạng
- Xây dựng kế hoạch
- Triển khai đánh giá

5. Một số use case deck mẫu

6. Các hỗ trợ từ Sisu
- Tư vấn 
- Triển khai
- Đào tạo