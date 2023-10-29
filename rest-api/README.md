  https://aws.amazon.com/ko/what-is/restful-api/ 
    + chatGPT

    REST (Representational State Transfer) API는 웹서버의 api 아키텍처 스타일 중 하나이다.

    네트워크 상에서 자원(Resource)을 고유한 식별자(URI)를 통해 표현하고, 
    HTTP 메서드를 사용하여 해당 자원에 대한 CRUD(Create, Read, Update, Delete) 작업을 수행하는 방식입니다.

    - 무상태성 (Stateless)  : 서버는 클라이언트의 상태를 저장하지 않고, 각 요청은 모든 필요한 정보를 포함하여 완전한 요청이 되어야 한다.
    - Client-Server 구조   : 클라이언트와 서버는 독립적으로 개발될 수 있다. 각각의 역할과 책임이 분리되어 서로 영향을 주지않는다.
    - 일관된 인터페이스 (unifrom interface) : HTTP 메서드를 사용, URL을 이용해 자원을 식별, 응답으로 JSON, XML을 사용
    - 캐시 가능서 (Cacheable): 서버의 응답을 클라이언트가 캐시할 수 있는 경우, 클라이언트는 이를 활용하여 캐시된 데이터를 재사용할 수 있습니다.
