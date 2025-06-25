export default eventHandler(async (event) => {
  // "https://ipinfo.io/json"
  //  "ip": "115.77.20.79",
  // "hostname": "adsl.viettel.vn",
  // "city": "Ho Chi Minh City",
  // "region": "Ho Chi Minh",
  // "country": "VN",
  // "loc": "10.8230,106.6296",
  // "org": "AS7552 Viettel Group",
  // "postal": "71606",
  // "timezone": "Asia/Ho_Chi_Minh",
  // "readme": "https://ipinfo.io/missingauth"

  const response = await $fetch("https://apip.cc/json");

  return {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache, no-store, must-revalidate",
      Pragma: "no-cache",
      Expires: "0",
    },
    status: 200,
    data: response,
  };
});

// async fetch(request): Promise<Response> {
// 		return new Response(
// 			JSON.stringify({
// 				city: request.cf?.city,
// 				postalCode: request.cf?.postalCode,
// 				region: request.cf?.region,
// 				regionCode: request.cf?.regionCode,
// 				country: request.cf?.country,
// 				continent: request.cf?.continent,
// 				timezone: request.cf?.timezone,
// 				latitude: request.cf?.latitude,
// 				longitude: request.cf?.longitude,
// 				asOrganization: request.cf?.asOrganization,
// 				userIP: request.headers.get('CF-Connecting-IP'),
// 			})
// 		);
// 	},
