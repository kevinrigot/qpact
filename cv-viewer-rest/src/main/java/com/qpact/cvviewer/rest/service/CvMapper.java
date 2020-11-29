package com.qpact.cvviewer.rest.service;

import com.qpact.cvviewer.model.entity.CvDo;
import com.qpact.cvviewer.rest.model.Cv;
import com.qpact.cvviewer.rest.model.CvSummary;
import org.mapstruct.Mapper;
import org.mapstruct.Mapping;
import org.mapstruct.factory.Mappers;

import java.util.List;

@Mapper(componentModel="spring")
public interface CvMapper {

    CvMapper INSTANCE = Mappers.getMapper(CvMapper.class);

    Cv cvEntityToCvResponse(CvDo cvDo);
    List<Cv> listOfCvEntityToListOfCvResponse(List<CvDo> cvDos);

    CvSummary cvEntityToCvSummaryResponse(CvDo cvDo);
    List<CvSummary> listOfCvEntityToListOfCvSummaryResponse(List<CvDo> cvDos);

}
