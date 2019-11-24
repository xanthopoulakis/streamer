require 'json'
require 'csv'

count = 1000000
r = 500
array = count.times.map do |x| 
  phi = 2 * Math::PI * rand()
  {index: (x + 1), x: (r + rand(r) * Math.cos(phi)).floor, y: (r + rand(r) * Math.sin(phi)).floor, val: rand()}
end

open('./public/plot.json', 'w') do |f|
  f << {records: array}.to_json
end

open('./public/plot.csv', 'w') do |f|
  f << (array.first.keys.map(&:to_s).join(',') + ("\n"))
  array.each do |rec|
    f << (rec.values.join(',')  + ("\n"))
  end
end

open('./public/plot.ndjson', 'w') do |f|
  f << array.group_by{|x| x[:index] / 1000}.values.map{|x| {records: x}.to_json}.join("\n")
end