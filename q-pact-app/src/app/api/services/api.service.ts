/* tslint:disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpRequest, HttpResponse, HttpHeaders } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { Observable } from 'rxjs';
import { map as __map, filter as __filter } from 'rxjs/operators';

import { CvSummary } from '../models/cv-summary';
import { Cv } from '../models/cv';
@Injectable({
  providedIn: 'root',
})
class ApiService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * @return The list of CV Summary
   */
  getCvResponse(): Observable<StrictHttpResponse<Array<CvSummary>>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;
    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cv`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<Array<CvSummary>>;
      })
    );
  }
  /**
   * @return The list of CV Summary
   */
  getCv(): Observable<Array<CvSummary>> {
    return this.getCvResponse().pipe(
      __map(_r => _r.body as Array<CvSummary>)
    );
  }

  /**
   * @param cvId The id of the cv requested
   * @return The requested CV detail
   */
  getCvByIdResponse(cvId: string): Observable<StrictHttpResponse<Cv>> {
    let __params = this.newParams();
    let __headers = new HttpHeaders();
    let __body: any = null;

    let req = new HttpRequest<any>(
      'GET',
      this.rootUrl + `/cv/${cvId}`,
      __body,
      {
        headers: __headers,
        params: __params,
        responseType: 'json'
      });

    return this.http.request<any>(req).pipe(
      __filter(_r => _r instanceof HttpResponse),
      __map((_r) => {
        return _r as StrictHttpResponse<Cv>;
      })
    );
  }
  /**
   * @param cvId The id of the cv requested
   * @return The requested CV detail
   */
  getCvById(cvId: string): Observable<Cv> {
    return this.getCvByIdResponse(cvId).pipe(
      __map(_r => _r.body as Cv)
    );
  }
}

module ApiService {
}

export { ApiService }
