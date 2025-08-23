/**
 * 전체 주소에서 구까지의 주소만 추출하는 함수
 * 예: "부산 사하구 감천동 26-41" -> "부산 사하구"
 */
export const extractGuAddress = (fullAddress: string): string => {
  if (!fullAddress) return '';

  // 주소를 공백으로 분리
  const addressParts = fullAddress.split(' ');

  // 시/도와 구까지만 추출
  // 부산 사하구 감천동 26-41 -> ["부산", "사하구", "감천동", "26-41"]
  // 인덱스 0, 1만 사용: "부산 사하구"
  if (addressParts.length >= 2) {
    return `${addressParts[0]} ${addressParts[1]}`;
  }

  // 주소가 2개 미만인 경우 전체 반환
  return fullAddress;
};

/**
 * 전체 주소에서 동까지의 주소만 추출하는 함수 (광역시 추가)
 * 예: "부산 사하구 감천동 26-41" -> "부산광역시 사하구 감천동"
 */
export const extractDongAddress = (fullAddress: string): string => {
  if (!fullAddress) return '';

  // 주소를 공백으로 분리
  const addressParts = fullAddress.split(' ');

  // 시/도, 구, 동까지만 추출
  // 부산 사하구 감천동 26-41 -> ["부산", "사하구", "감천동", "26-41"]
  // 인덱스 0, 1, 2만 사용: "부산광역시 사하구 감천동"
  if (addressParts.length >= 3) {
    const city = addressParts[0];
    const gu = addressParts[1];
    const dong = addressParts[2];

    // 부산인 경우 광역시 추가
    if (city === '부산') {
      return `부산광역시 ${gu} ${dong}`;
    }

    return `${city} ${gu} ${dong}`;
  }

  // 주소가 3개 미만인 경우 전체 반환
  return fullAddress;
};
