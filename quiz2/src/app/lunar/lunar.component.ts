import { Component, OnInit } from '@angular/core';
import * as d3 from 'd3';

@Component({
  selector: 'app-lunar',
  templateUrl: './lunar.component.html',
  styleUrls: ['./lunar.component.css']
})
export class LunarComponent implements OnInit {
  private data = [
    {"TypeAndDate": "Total: 2001 Jan 09", "Duration": "297", "Year": "2001"},
    {"TypeAndDate": "Annular: 2001 Dec 14", "Duration": "233", "Year": "2001.5"},
    {"TypeAndDate": "Annular: 2002 Jun 10", "Duration": "23", "Year": "2002"},
    {"TypeAndDate": "Total: 2002 Dec 04", "Duration": "134", "Year": "2002.5"},
    {"TypeAndDate": "Annular: 2003 May 31", "Duration": "217", "Year": "2003"},
    {"TypeAndDate": "Total: 2003 Nov 23", "Duration": "117", "Year": "2003.5"},
    // {"TypeAndDate": "Partial: 2004 Apr 19", "Duration": "0", "Year": "2004"},
    // {"TypeAndDate": "Partial: 2004 Oct 14", "Duration": "0", "Year": "2004.5"},
    {"TypeAndDate": "Hybrid: 2005 Apr 08", "Duration": "42", "Year": "2005"},
    {"TypeAndDate": "Annular: 2005 Oct 03", "Duration": "272", "Year": "2005.5"},
    {"TypeAndDate": "Total: 2006 Mar 29", "Duration": "247", "Year": "2006"},
    {"TypeAndDate": "Annular: 2006 Sep 22", "Duration": "429", "Year": "2006.5"},
    // {"TypeAndDate": "Partial: 2007 Mar 19", "Duration": "0", "Year": "2007"},
    // {"TypeAndDate": "Partial: 2007 Sep 11", "Duration": "0", "Year": "2007.5"},
    {"TypeAndDate": "Annular: 2008 Feb 07", "Duration": "132", "Year": "2008"},
    {"TypeAndDate": "Total: 2008 Aug 01", "Duration": "147", "Year": "2008.5"},
    {"TypeAndDate": "Annular: 2009 Jan 26", "Duration": "474", "Year": "2009"},
    {"TypeAndDate": "Total: 2009 Jul 22", "Duration": "399", "Year": "2009.5"},
    {"TypeAndDate": "Annular: 2010 Jan 15", "Duration": "668", "Year": "2010"},
    {"TypeAndDate": "Total: 2010 Jul 11", "Duration": "320", "Year": "2010.5"},
    // {"TypeAndDate": "Partial: 2011 Jan 04", "Duration": "0", "Year": "2011"},
    // {"TypeAndDate": "Partial: 2011 Jun 01", "Duration": "0", "Year": "2011.25"},
    // {"TypeAndDate": "Partial: 2011 Jul 01", "Duration": "0", "Year": "2011.5"},
    // {"TypeAndDate": "Partial: 2011 Nov 25", "Duration": "0", "Year": "2011.75"},
    {"TypeAndDate": "Annular: 2012 May 20", "Duration": "346", "Year": "2012"},
    {"TypeAndDate": "Total: 2012 Nov 13", "Duration": "242", "Year": "2012.5"},
    {"TypeAndDate": "Annular: 2013 May 10", "Duration": "303", "Year": "2013"},
    {"TypeAndDate": "Hybrid: 2013 Nov 03", "Duration": "640", "Year": "2013.5"},
    // {"TypeAndDate": "Annular: 2014 Apr 29", "Duration": "0", "Year": "2014"},
    // {"TypeAndDate": "Partial: 2014 Oct 23", "Duration": "0", "Year": "2014.5"},
    {"TypeAndDate": "Total: 2015 Mar 20", "Duration": "267", "Year": "2015"},
    // {"TypeAndDate": "Partial: 2015 Sep 13", "Duration": "0", "Year": "2015.5"},
    {"TypeAndDate": "Total: 2016 Mar 09", "Duration": "249", "Year": "2016"},
    {"TypeAndDate": "Partial: 2016 Sep 01", "Duration": "186", "Year": "2016.5"},
    {"TypeAndDate": "Annular: 2017 Feb 26", "Duration": "54", "Year": "2017"},
    {"TypeAndDate": "Total: 2017 Aug 21", "Duration": "160", "Year": "2017.5"},
    // {"TypeAndDate": "Partial: 2018 Feb 15", "Duration": "0", "Year": "2018"},
    // {"TypeAndDate": "Partial: 2018 Jul 13", "Duration": "0", "Year": "2018.3"},
    // {"TypeAndDate": "Partial: 2018 Aug 11", "Duration": "0", "Year": "2018.6"},
    // {"TypeAndDate": "Partial: 2019 Jan 06", "Duration": "0", "Year": "2019"},
    {"TypeAndDate": "Total: 2019 Jul 02", "Duration": "273", "Year": "2019.3"},
    {"TypeAndDate": "Annular: 2019 Dec 26", "Duration": "319", "Year": "2019.6"},
    {"TypeAndDate": "Annular: 2020 Jun 21", "Duration": "38", "Year": "2020"},
    {"TypeAndDate": "Total: 2020 Dec 14", "Duration": "130", "Year": "2020.5"},
    {"TypeAndDate": "Annular: 2021 Jun 10", "Duration": "231", "Year": "2021"},
    {"TypeAndDate": "Total: 2021 Dec 04", "Duration": "214", "Year": "2021.5"}
  ];
  private svg: any;
  private margin = 50;
  private width = 1200 - (this.margin * 2);
  private height = 800 - (this.margin * 2);

  constructor() { }

  ngOnInit(): void {
    this.createSvg();
    this.drawPlot();
  }

  private createSvg(): void {
      this.svg = d3.select("figure#scatter")
      .append("svg")
      .attr("width", this.width + (this.margin * 2))
      .attr("height", this.height + (this.margin * 2))
      .append("g")
      .attr("transform", "translate(" + this.margin + "," + this.margin + ")");
  }

  private drawPlot(): void {
    // Add X axis
    const x = d3.scaleLinear()
    .domain([2000, 2030])
    .range([ 0, this.width ]);
    this.svg.append("g")
    .attr("transform", "translate(0," + this.height + ")")
    .call(d3.axisBottom(x).tickFormat(d3.format("d")));

    // Add Y axis
    const y = d3.scaleLinear()
    .domain([0, 800])
    .range([ this.height, 0]);
    this.svg.append("g")
    .call(d3.axisLeft(y));

      // Add dots
      const dots = this.svg.append('g');
      dots.selectAll("dot")
      .data(this.data)
      .enter()
      .append("circle")
      .attr("cx", (d: any) => x(d.Year))
      .attr("cy", (d: any) => y(d.Duration))
      .attr("r", 7)
      .style("opacity", .5)
      .style("fill", "purple");

      // Add labels
      dots.selectAll("text")
      .data(this.data)
      .enter()
      .append("text")
      .text((d: any) => d.TypeAndDate)
      .attr("x", (d: any) => x(d.Year))
      .attr("y", (d: any) => y(d.Duration))
  }
}
